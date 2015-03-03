class TweetsController < ApplicationController

  def show
    user_name = params[:id]
    tweets = TwitterClient.user_timeline(user_name)#.map(&:text)
    render json: {tweets: tweets}, status: 200
  end

end
