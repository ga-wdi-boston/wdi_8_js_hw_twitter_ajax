require 'json'

class TweetsController < ApplicationController

  def show
  user_name = params[:id] #shown in rake routes
    tweets = TwitterClient.user_timeline(user_name)
    # render json: JSON.generate(tweets)
    render json: {tweets: tweets}, status: 200
  end
end
