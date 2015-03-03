class TweetsController < ApplicationController

  def show
    user_name = params[:id]
    render json: { tweets: tweets }

  end
  end
