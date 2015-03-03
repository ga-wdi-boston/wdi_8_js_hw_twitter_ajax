class TweetsController < ApplicationController
  def show
    user = params[:id]
    # binding.pry
    tweets = TwitterClient.user_timeline(user).map(&:text)
    # username = TwitterClient.user_timeline(user).map(&:screen_name)
    render json: {tweets: tweets}
  end
end
