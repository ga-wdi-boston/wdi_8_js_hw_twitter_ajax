class TweetsController < ApplicationController
  def show
    screenname = params[:id]
    tweets = TwitterClient.user_timeline(screenname).map(&:text)
    rend json: { tweets: tweets }

  end
end
