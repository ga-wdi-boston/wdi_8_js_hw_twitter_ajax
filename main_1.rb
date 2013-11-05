require 'twitter'
require 'pry'
require 'dotenv'
require 'sinatra'
require 'sinatra/reloader' if development? 
Dotenv.load
set :server, 'webrick'


def twitter(company)
  client = Twitter::REST::Client.new do |config|
    config.consumer_key        = ENV["CONSUMER_KEY"]
    config.consumer_secret     = ENV["CONSUMER_SECRET"]
    config.access_token        = ENV["ACCESS_TOKEN"]
    config.access_token_secret = ENV["ACCESS_SECRET"]
  end
end

get '/twitter.json' do
  return 
end

post