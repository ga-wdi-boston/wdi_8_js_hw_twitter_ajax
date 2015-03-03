class UsersController < ApplicationController
  def show
    # tweets = TwitterClient.user_timeline(params[:id]).take(20).map(&:text)
    tweets = TwitterClient.user_timeline(params[:id])
    render json: {tweets: tweets}
  end
end
