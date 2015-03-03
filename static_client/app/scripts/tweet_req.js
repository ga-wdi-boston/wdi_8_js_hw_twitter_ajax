'use strict';

var TwitterApp = TwitterApp || {};

TwitterApp.tweetsByUser = {
  get: function ( username ) {
    $.ajax({
      url: 'http://localhost:3000/tweets/' + username,
      dataType: 'json'
    })
      .then(function getTweets ( data ) {
        return data.tweets;
      })
      .then(TwitterApp.tweetsByUser.tweetHandler)
      .fail(function ( jqXHR, textStatus, ErrorThrown ) {
        console.log(jqXHR, textStatus, ErrorThrown);
      });
  },
  tweetHandler: function ( remoteTweets ) {
    $('.tweets-list').append(remoteTweets.map( function renderTweet ( tweet ) {
      return $('<div class="tweet">').text(tweet);
    }));
  } 
};