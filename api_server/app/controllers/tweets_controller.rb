class TweetsController < ApplicationController
  def show
    user_name = params[:id]
    tweets = TwitterClient.user_timeline(user_name).take(20).map{|x| x.text}
    render json: {tweets: tweets}
  end
end
