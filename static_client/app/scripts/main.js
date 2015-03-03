'use strict';
//namespace

var TwitterApp = TwitterApp || {};

TwitterApp.getTweets = function(){
  $.ajax({
    url: 'http://localhost:3000/tweets/' + $('#searchTweet').val(),
    type: 'GET',
    dataType: 'JSON',
  }).done(function(data){
    console.log(data);
    TwitterApp.showAllTweets(data['tweets']);
  }).fail(function(){
    console.log('error');
  });
};

TwitterApp.showAllTweets = function(tweets){
  for(var i=0; i <tweets.length; i++){
  TwitterApp.showTweet(tweets[i]);
  }
};

TwitterApp.showTweet = function(tweet){
  var tweet_html = '<li>' + tweet + '</li>';
  $('#displayAll').append(tweet_html);
};



$(document).ready(function(){
  $('#submit').on('click',TwitterApp.getTweets);

});
