require 'pry'
class TweetsController < ApplicationController
  def show
    screenname = params[:id]
    tweets = TwitterClient.user_timeline(screenname).map(&:text)
    binding.pry
    rend json: { tweets: tweets }, status: 200

  end
end
