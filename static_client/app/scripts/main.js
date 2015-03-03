'use strict';

var TweetsApp = TweetsApp || {
  $tweets: $('#status-list')
};

TweetsApp.init = function(){
  var $searchInput = $('#search-username');
  var $searchTweets = $('#search-tweets');

  $searchTweets.click(function(){
    var username = $searchInput.val();
    TweetsApp.findTweets(username);
    $searchInput.val('');
  });
};

TweetsApp.findTweets = function(username){
  $.ajax({
    url: 'http://localhost:3000/tweets/' + username,
    type: 'GET',
  })
  .done(function(data) {
    console.log(data);
    data.tweets.reverse().forEach(TweetsApp.viewTweets);

  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(jqXHR, textStatus, errorThrown);
  });
};

TweetsApp.viewTweets = function(tweet, index){
  var $newTweetHTML = $('<div class=tweet id=' + index + '>');
  $newTweetHTML.html('<p>' + tweet + '</p>');
  TweetsApp.$tweets.prepend($newTweetHTML);
};

$(document).ready(function() {
  TweetsApp.init();
});
