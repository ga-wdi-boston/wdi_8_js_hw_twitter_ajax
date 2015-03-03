'use strict';

var App = App || {
  $tweets: $('#tweetsContainer')
};

App.init = function(){
  var $search = $('input[id="search"]');

  $('#button').on('click', function(){
     var $searchInput = $search.val();
     console.log($searchInput);
     App.getUserTweets($searchInput);
  });
};

App.getUserTweets = function(username){
  event.preventDefault();

  $.ajax({
    url: 'http://localhost:3000/tweets/' + username,
    type: 'GET',
    // dataType: 'json',
  })
  .done(function(data) {
    console.log(data);
    $('#tweetsContainer').empty();
    data.tweets.reverse().forEach(App.showTweets);

  })
  .fail(function() {
    console.log("error");
  });
};

App.showTweets = function(tweet, index){
  var $tweetHtml = ('<div id=' + index + '>');
  $tweetHtml += ('<p>' + tweet + '</p>');
   App.$tweets.append($tweetHtml);
};

// App.postTweet = function(){
//   $.ajax({
//     url: 'localhost:3000/tweets',
//     type: 'POST',
//     dataType: 'json',
//     data: {param1: 'value1'},
//   })
//   .done(function() {
//     console.log("success");
//   })
//   .fail(function() {
//     console.log("error");
//   })
//   .always(function() {
//     console.log("complete");
//   });

// }


$(document).ready(function() {
  App.init();
});
