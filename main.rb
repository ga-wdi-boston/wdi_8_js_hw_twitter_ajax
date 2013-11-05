require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'dotenv'
require 'twitter'

Dotenv.load

$twitter_client = Twitter::REST::Client.new do |config|
        config.consumer_key        = ENV['CONSUMER_KEY']
        config.consumer_secret     = ENV['CONSUMER_SECRET']
        config.access_token        = ENV['ACCESS_TOKEN']
        config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']
end


get '/twitter/:id' do
        tweet_array = []
        binding.pry
        $twitter_client.user_timeline(params[:id].to_s, count: 10, lang: "en").collect do |tweet|
                tweet_array << tweet.text.to_s
        end
        tweet_array.to_json
end