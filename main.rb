require 'pry'
require 'dotenv'
require 'twitter'
require 'sinatra'
require 'sinatra/reloader'
set :server, 'webrick'
Dotenv.load

client = Twitter::REST::Client.new do |config|
	config.consumer_key        	= ENV["CONSUMER_KEY"]
  config.consumer_secret    	= ENV["CONSUMER_SECRET"]
  config.access_token        	= ENV["ACCESS_TOKEN"]
  config.access_token_secret 	= ENV["ACCESS_SECRET"]
end

get '/:username' do
	recent_tweets = []	
	client.user_timeline(params[:username], :count => 20).each do |tweet|
	recent_tweets << tweet.text 
	end
	return recent_tweets.to_json
end



