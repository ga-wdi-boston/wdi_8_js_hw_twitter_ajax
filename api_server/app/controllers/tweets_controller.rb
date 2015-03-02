class Tweets < ApplicationController

  # def index
  # end

  def show
    user_name = parmas[:id]
    tweets = TwitterClient.user_timeline(user_name).map(&:text)
    render json: tweet.to_json
  end
end
