'use strict';

var TwitterApp = TwitterApp || {};

TwitterApp.userTweets = function(){
  event.preventDefault();
  // var user_name = username;
  $.ajax({
    url: 'http://localhost:3000/tweets/' + $('input#search_input').val(),
    type: 'GET',
    dataType: 'JSON'
  }).done(function(data){
    console.log(data);
    TwitterApp.render_tweets(data);
  });
};

TwitterApp.render_tweets = function(all_tweets){
  for (var i=0; i < all_tweets.length; i++){
    TwitterApp.render_one_tweet(all_tweets[i]);
  }
};

TwitterApp.render_one_tweet = function(tweet){
  var html = '<div id="' + tweet.id + '">';
  html += '<p>' + tweet.text + '</p>';
  html += '</div>';
  $('#tweets').append(html);
};

$(document).ready(function(){
  $('#search_input').focus();

  $('form#searchbar').on('submit', function(event){
    TwitterApp.userTweets(event);
  });
  // $('#search').click(function() {
  //   TwitterApp.userTweets($('#search_input').val());
  // });


  // $('#search').on('click', function(){
  //   event.preventDefault();
  //   var $user_name = $('#search_input').val();
  //   TwitterApp.userTweets($user_name);
  // });

});

