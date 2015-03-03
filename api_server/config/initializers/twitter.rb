TwitterClient = Twitter::REST::Client.new do |config|


  config.consumer_key        = ENV["TWITTER_CONSUMER_KEYxxxxxxxxxxxxxx"]
  config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRETxxxxxxxxxxxx"]
  config.access_token        = ENV["TWITTER_ACCESS_TOKENxxxxxxxxxxxxxxx"]
  config.access_token_secret = ENV["TWITTER_ACCESS_SECRETxxxxxxxxxxxxxx"]


end

