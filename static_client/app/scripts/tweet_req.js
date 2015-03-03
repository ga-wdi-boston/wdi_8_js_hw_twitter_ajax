'use strict';

var TwitterApp = TwitterApp || {};

var username = $('#user_name').val();

TwitterApp.tweetsByUser = {
  get: function(){
    $.ajax({
      url: 'http://localhost:3000/tweets/' + username,
      dataType: 'json'
    }).then(function(data){
      console.log(data);
    }).fail(function(jqXHR, textStatus, ErrorThrown) {
      console.log(jqXHR, textStatus, ErrorThrown);
    });
  }, 
};

// tweetHandler: function ( remoteTweets ) {
  //   $('.tweets-list').append(remoteTweets.map( function renderTweet ( tweet ) {
  //     return new TwitterApp.Tweet( tweet ).render();
  //   }).join(''));
  // }