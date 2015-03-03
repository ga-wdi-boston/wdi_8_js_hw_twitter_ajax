class UsersController < ApplicationController
  def show
    tweets = TwitterClient.user_timeline(params[:id]).take(20).map(&:text)
    render json: {tweets: tweets}
  end
end
