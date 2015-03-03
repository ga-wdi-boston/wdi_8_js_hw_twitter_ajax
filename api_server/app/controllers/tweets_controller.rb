class TweetsController < ActionController::API
  def show
    twitter_user = params[:id]
    tweets = TwitterClient.user_timeline(twitter_user)
    render json: {tweets: tweets} #json needs a key! even if its bullshit
  end
end
