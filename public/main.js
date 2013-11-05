'use strict';

var setButtonEvent = function() {
	$('#search-button').click(function(e){
    e.preventDefault();
    get_user_input();
  });
};

var get_user_input = function() {
  load_json($('#search-box').val());
};

var load_json = function(screen_name) {
  $.ajax({
    url: "/tweets/" + screen_name,
    data: {
      username: screen_name
    },
    success: function(data) {
      render_tweets(data);
    }
  });
};
 
var render_tweets = function(tweet_string) {
  var tweets = $.parseJSON(tweet_string);
  $.each(tweets, function(index, tweet) {
    $('#tweet-list').append('<li class="one-tweet">' + tweet + '</li>');
  })
};

$(function() {
  setButtonEvent();
  fallingLeaves();
});
