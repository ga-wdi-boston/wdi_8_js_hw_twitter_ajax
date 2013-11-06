require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'dotenv'
require 'twitter'

Dotenv.load

$twitter_client = Twitter::REST::Client.new do |config|
	config.consumer_key        = ENV['TWITTER_KEY']
	config.consumer_secret     = ENV['TWITTER_SECRET']
	config.access_token        = ENV['TWITTER_TOKEN']
	config.access_token_secret = ENV['TWITTER_TOKEN_SECRET']
end


get '/twitter/:id' do
	tweet_array = []
	$twitter_client.user_timeline(params[:id].to_s, count: 20, lang: "en").collect do |tweet|
		tweet_array << tweet.text.to_s
	end
	tweet_array.to_json
end

