class TweetsController < ApplicationController
  def show
    twitter_user = params[:id]
    tweets = TwitterClient.user_timeline(twitter_user)
    render json: tweets.map do |tweet|
      tweet.text
    end
  end
end
