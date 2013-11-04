require 'pg'
require 'pry'
require 'dotenv'
require 'twitter'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/activerecord'
require_relative 'config/twitter'

Dotenv.load

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV["CONSUMER_KEY"]
  config.consumer_secret     = ENV["CONSUMER_SECRET"]
  config.access_token        = ENV["ACCESS_TOKEN"]
  config.access_token_secret = ENV["ACCESS_SECRET"]
end

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

class Tweejax < ActiveRecord::Base
end

# Gets my 20 recent tweets text
get '/recent' do
  client.user_timeline.map(&:text)
  binding.pry
end

# Gets :user's 20 recent tweets text
get '/recent/:user' do
  client.user_timeline(params[:user]).map(&:text)
end


