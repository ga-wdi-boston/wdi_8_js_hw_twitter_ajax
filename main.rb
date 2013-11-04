require 'pry'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'twitter'
require 'dotenv'
set :server, 'webrick'

Dotenv.load
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

$twitter = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV["CONSUMER_KEY"]
  config.consumer_secret     = ENV["CONSUMER_SECRET"]
  config.access_token        = ENV["ACCESS_TOKEN"]
  config.access_token_secret = ENV["ACCESS_SECRET"]
end

get '/twitter/:id' do
  tweets = []
  $twitter.user_timeline(params[:id].to_s, count: 20, lang: "en").collect do |tweet|
    tweets << tweet.text.to_s
  end
  tweets.to_json
end