class TweetsController < ApplicationController

  def show
    user_name = params[:id]
    tweet = TwitterClient.user_timeline(user_name).map(&:text)
    render json: {tweets: tweet}
  end

end
