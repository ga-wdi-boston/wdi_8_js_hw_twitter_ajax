class TweetsController < ApplicationController

  def show
    tweeter = params[:id]
    tweets = TwitterClient.user_timeline(tweeter)#.map(&:text)
    render json: {tweets: tweets}
  end
end
