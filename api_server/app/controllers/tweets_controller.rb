class TweetsController < ApplicationController
  def show
    twitter_handle = params[:id]
    #tweets = TwitterClient.user_timeline(twitter_handle) #returns all tweets
    tweets = TwitterClient.user_timeline(twitter_handle).map(&:text) #returns just the text of all tweets
    #json wants keys & values
    render json: {tweets: tweets}
  end
end
