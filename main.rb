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

binding.pry

@tweets = $twitter.search("@QuotesByBlake", :count => 10, :result_type => "recent").collect do |tweet|
    if tweet.lang == 'en'
      "#{tweet.user.screen_name}: #{tweet.text}"
    end
  end