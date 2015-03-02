class TweetsController < ApplicationController

  def show
    username = params[:id]
    tweets = TwitterClient.user_timeline(username).map(&:text)
    # tweets = user.each_with_object({}) { |tweet, status| status[tweet.id] = tweet.text }
    render json: {tweets: tweets}
  end

end
