class TweetsController < ApplicationController

  def show
    user_name = params[:id]
    tweets = TwitterClient.user_timeline(user_name).map(&:text)
    render json: { tweets: tweets }
    #usually wanna send json key/value pairs so it's not just like wat an object?
    # still not clear how to pass the id to the url/rout
  end

end