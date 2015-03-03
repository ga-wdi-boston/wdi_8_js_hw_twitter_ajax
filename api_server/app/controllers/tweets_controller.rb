class TweetsController < ApplicationController
  def show
    user = params[:id]
    tweets = TwitterClient.user_timeline(user).map(&:text)
    render json: {tweets: tweets}
  end
end
