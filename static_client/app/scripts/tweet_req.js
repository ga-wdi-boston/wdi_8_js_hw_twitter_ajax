'use strict';

var TwitterApp = TwitterApp || {};

TwitterApp.Tweet = function ( remoteTweet ) {
  this.user_name = remoteTweet.user_name;
  this.tweet = remoteTweet.tweet;
  this.id = remoteTweet.id;
};

TwitterApp.tweetsByUser = {
  get: function(){
    $.ajax({
      url: 'http://localhost:3000/tweets',
      dataType: 'JSON'
    }).then(TwitterApp.tweetsByUser.tweetHandler).fail(function(jqXHR, textStatus, ErrorThrown) {
      console.log(jqXHR, textStatus, ErrorThrown);
    });
  },
  tweetHandler: function ( remoteTweets ) {
    $('.tweets-list').append(remoteTweets.map( function renderTweet ( tweet ) {
      return new TwitterApp.Tweet( tweet ).render();
    }).join(''));
  }
};