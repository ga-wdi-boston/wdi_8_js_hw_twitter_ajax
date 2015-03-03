'use strict';

var TwitterApp = TwitterApp || {};

TwitterApp.userTweets = function(username){
  var user_name = username;
  $.ajax({
    url: 'http://localhost:3000/tweets/' + user_name,
    type: 'GET',
    dataType: 'JSON'
  }).done(function(data){
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

// var user_name = $('#search_input').val();

// TwitterApp.userTweets = {
//   get: function(){
//     $.ajax({
//       url: 'http://localhost:3000/tweets/' + user_name,
//       dataType: 'JSON'
//     }).success(function(data){
//       trace(data);
//     }).fail(function(jqXHR, textStatus, ErrorThrown){
//       trace(jqXHR, textStatus, ErrorThrown);
//     });
//   }
// };
$(document).ready(function(){
  $('#search_input').focus();

  $('#search').click(function() {
    TwitterApp.userTweets($('#search_input').val());
  });


  // $('#search').on('click', function(){
  //   event.preventDefault();
  //   var $user_name = $('#search_input').val();
  //   TwitterApp.userTweets($user_name);
  // });

});
