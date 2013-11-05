require 'pg'
require 'pry'
require 'dotenv'
require 'twitter'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/activerecord'
# require_relative 'config/twitter'

Dotenv.load
set :server, 'webrick'
# set :public, 'public' 
# enable :static

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV["CONSUMER_KEY"]
  config.consumer_secret     = ENV["CONSUMER_SECRET"]
  config.access_token        = ENV["ACCESS_TOKEN"]
  config.access_token_secret = ENV["ACCESS_SECRET"]
end

# Gets :user's 20 most recent tweets text
get '/recent/:user' do
  client.user_timeline(params[:user]).map(&:text).to_json
end


