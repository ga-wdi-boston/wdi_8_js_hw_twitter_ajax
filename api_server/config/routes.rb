Rails.application.routes.draw do

  resources :tweets, only: [:show]

end
