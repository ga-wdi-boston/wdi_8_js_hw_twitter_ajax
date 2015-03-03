class TweetsController < ApplicationController
  def show
    user_name = params[:id]
    tweet = TwitterClient.user_timeline(user_name)
    render json: {tweets: tweet}
  end
end
