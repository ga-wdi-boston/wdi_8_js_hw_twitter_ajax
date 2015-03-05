require 'pry'
class TweetsController < ApplicationController
  def show
    #my code:
    #twitter_handle = params[:id]
    #tweets = TwitterClient.user_timeline(twitter_handle) #returns all tweets
    # tweets = TwitterClient.user_timeline(twitter_handle).map(&:text)

    #json wants keys & values
    # render json: {tweets: tweets}

    #in class review
    #http://localhost:3000/tweets/username
    #tweets = TwitterClient.user_timeline(twitter_handle).map(&:text)
# binding.pry
    twitter_handle = params[:id]
    tweets = TwitterClient.user_timeline(twitter_handle)
    render json: {tweets: tweets}, status: 200

  end
end
