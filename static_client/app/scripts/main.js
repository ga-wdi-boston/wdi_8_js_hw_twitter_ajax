var TwitterApp = {
  $tweets: $('#tweet-list')
}


TwitterApp.getTweets = function(username){

  $.ajax({
    url: 'http://localhost:3000/tweets/' + username,
    type: 'GET'
  }).done(function(data){
    console.log('hooray, it worked',data);
    data.tweets.forEach(TwitterApp.addOneTweet);
  }).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log('i’m so stupid', jqXHR, textStatus, errorThrown );
  });
};

TwitterApp.init = function(){

  var $searchbox = $('#username-box');
  var $button = $('#submit-search');

  $button.click(function(){
    var username = $searchbox.val();
    event.preventDefault();
    TwitterApp.getTweets(username);
    $searchbox.val('');
  });
}



TwitterApp.addOneTweet = function(tweet, index){

  var $newTweetHTML = $('<div class=tweet id='+ index +'>');
  $newTweetHTML.html('<p>' + tweet + '</p>');
  TwitterApp.$tweets.prepend($newTweetHTML);
};


$(document).ready(function() {
  TwitterApp.init();
});
