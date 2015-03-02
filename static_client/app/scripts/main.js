'use strict';

var TweetsApp = TweetsApp || {
  $tweets: $('.tweetscontainer')
};

TweetsApp.init = function(){
 var $search = $('input[id="search"]');
 var $submitButton = $('#submitButton');

  $submitButton.on('click', function(){
    event.preventDefault();
    var $username = $search.val();
    console.log('button clicked');
    TweetsApp.submitSearch($username);
    //debugger;
});
};

TweetsApp.submitSearch = function(username){
  //if(event.preventDefault) event.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/tweets/' + username,
    type: 'GET',
  })
  .done(function(data) {
    //console.log("success");
    console.log(data);
    data.tweets.reverse().forEach(TweetsApp.showTweets);
  })
  .fail(function() {
    console.log("error");
  });

};


TweetsApp.showTweets = function(tweet, index){
  //if(event.preventDefault) event.preventDefault();
  var $tweethtml = $('<div class=tweet id=' + index + '>');
  $tweethtml.html('<p>' + tweet + '</p>');
  TweetsApp.$tweets.prepend($tweethtml);

};


$(document).ready(function() {
  console.log('hello!');
  TweetsApp.init();

});
