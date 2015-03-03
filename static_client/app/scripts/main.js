/*global $:false*/
'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

var App = App || {};

App.ajaxFail = function(jqXHR, textStatus, errorThrown) {
  trace(jqXHR, textStatus, errorThrown);
};

App.createTweetHTML = function(tweet) {
  var tweetHTML = '<h4>' + tweet.text + '</h4>' +
                  '<p>' + tweet.created_at + '</p>';
  $('div#tweets').append(tweetHTML);
};

App.renderTweets = function(tweets) {
  tweets.tweets.forEach(App.createTweetHTML);
};

App.getTweets = function(event) {
  event.preventDefault();
  $('div#tweets').empty();
  $.get('http://localhost:3000/tweets/' + $('input#username').val(), App.renderTweets, 'JSON')
  .fail(App.ajaxFail);
};

$(document).ready(function() {
  $('button#submit').on('click', App.getTweets);
});
