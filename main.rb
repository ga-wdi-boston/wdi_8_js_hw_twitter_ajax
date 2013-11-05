require 'twitter'
require 'pry'
require 'dotenv'
require 'sinatra'
require 'sinatra/reloader' if development?


set :server, 'webrick'

Dotenv.load

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV["CONSUMER_KEY"]
  config.consumer_secret    = ENV["CONSUMER_SECRET"]
  config.access_token        = ENV["ACCESS_TOKEN"]
  config.access_token_secret = ENV["ACCESS_SECRET"]

end


get '/twitter/:id' do 
		tweet_array = []
		client.user_timeline(params[:id].to_s, count: 20, lang: "en").collect do |tweet|
			tweet_array << tweet.text.to_s 
	end
	tweet_array.to_json
end






