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
	var tweets_length,
			tweet,
			tweet_list,
			i = 0;
  var tweets = $.parseJSON(tweet_string)
  tweets_length = tweets.length;
	tweet_list = $('#tweet-list')[0];
	tweet_list.innerHTML = '';
	for(;i < tweets_length;) {
		tweet = tweets[i];
		tweet_list.innerHTML += ('<li>' + tweet + '</li>');
		i = i + 1;
	}
};
 

$(function() {
  setButtonEvent();
  fallingLeaves();
});
