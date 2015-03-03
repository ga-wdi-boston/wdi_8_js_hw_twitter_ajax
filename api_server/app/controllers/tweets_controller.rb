class TweetsController < ApplicationController

  def show
    home_timeline = params[:id]
    tweets = TwitterClient.user_timeline(home_timeline).map(&:text)
    # you need a key and a value to make json
    render json: {tweets: tweets}
  end

end
