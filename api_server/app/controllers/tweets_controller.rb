class TweetsController < ApplicationController
  def show
    user_name = params[:id]
    tweets = TwitterClient.user_timeline(user_name).map(&:text)
    render json: {tweets: tweets}
  end

  # def create
  #   current_user.tweet(twitter_params[:message])
  # end

  # def twitter_params
  #   params.require(:tweet).permit(:message)
  # end

  # def update
  #   user_name = params[:id]
  #   new_tweet = TwitterClient.update(tweet.to_s)
  #   render json: {new_tweet: new_tweet}
end
