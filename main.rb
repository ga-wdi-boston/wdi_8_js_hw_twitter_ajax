require 'pry'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'twitter'
require 'dotenv'
set :server, 'webrick'

Dotenv.load

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV["CONSUMER_KEY"]
  config.consumer_secret     = ENV["CONSUMER_SECRET"]
  config.access_token        = ENV["ACCESS_TOKEN"]
  config.access_token_secret = ENV["ACCESS_SECRET"]
end

get '/:id' do
  binding.pry
  tweet_array = []
  client.user_timeline(params[:id]).collect do |tweet|
    tweet_array << tweet.text.to_s
  end
  tweet_array.to_json
end