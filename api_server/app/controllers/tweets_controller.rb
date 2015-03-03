class TweetsController < ApplicationController
  def show
    user = params[:id]
    tweets = TwitterClient.user_timeline(user).map do |tweet|
      { text: tweet[:text], created_at: tweet[:created_at] }
    end
    render json: { tweets: tweets }
  end
end
