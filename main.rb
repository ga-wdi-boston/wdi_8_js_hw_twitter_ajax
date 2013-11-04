require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'
require 'twitter'
require 'dotenv'
Dotenv.load
set :server, 'webrick'

def twitter_auth
  client = Twitter::REST::Client.new do |config|
    config.consumer_key        = ENV["CONSUMER_KEY"]
    config.consumer_secret     = ENV["CONSUMER_SECRET"]
    config.access_token        = ENV["ACCESS_TOKEN"]
    config.access_token_secret = ENV["ACCESS_SECRET"]
  end
  return client
end

def twitter_search(user)
  return twitter_auth.user_timeline(user).collect { |tweet| tweet.text }
end

get '/:username.json' do
  return twitter_search(params[:username]).to_json
end

# bundle exec rackup