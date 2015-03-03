'use strict';

var TwitterApp = TwitterApp || {};

TwitterApp.populateField = function(){
  TwitterApp.setField();
  TwitterApp.findTweet();
};

TwitterApp.setField = function(){
  $('#tweets').html('');
};

TwitterApp.findTweet = function(){
  var name = $('#user_name').val();
  $.ajax({
      url: 'http://localhost:3000/users/' + name,
      type: 'GET'
    }).done(function(data){
      TwitterApp.displayTweets(data);
    });
};

TwitterApp.displayTweets = function(data){
  for (var i = 0; i < data.tweets.length; i++){
    TwitterApp.displayTweet(data.tweets[i]);
  }
};

TwitterApp.displayTweet = function(tweet){
  var target = $('#tweets');
  var newItem = $('<li>');
  newItem.text(tweet);
  target.append(newItem);
};

$(document).ready(function(){
  $('.btn').click(TwitterApp.populateField);
});
