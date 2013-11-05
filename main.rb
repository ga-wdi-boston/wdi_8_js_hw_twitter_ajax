require 'twitter'
require 'pry'
require 'dotenv'
require 'sinatra'
require 'sinatra/reloader' if development?


set :server, 'webrick'
enable :static
set :public, 'public'

Dotenv.load

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV["CONSUMER_KEY"]
  config.consumer_secret     = ENV["CONSUMER_SECRET"]
  config.access_token        = ENV["ACCESS_TOKEN"]
  config.access_token_secret = ENV["ACCESS_SECRET"]

end


get '/tweets/:username' do
  recent_tweets = []
  client.user_timeline(params[:username]).each do |t|
  recent_tweets << t.text
  end
  return recent_tweets.to_json
end