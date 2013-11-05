var setButtonEvent = function() {
$("#search-button").click(function(e){
		e.preventDefault();
		get_user_input();
	});
};

var get_user_input = function() {
	async_load_json($("#search-box").val());
};

var async_load_json = function(screen_name) {
	$.ajax( {
		url: "/tweets/" + screen_name,
		success: function(data) {
			render_tweets(data);
		}
	});
};


var render_tweets = function(data) {
	var tweets = $.parseJSON(data);
	var json_length,
		tweet,
		tweet_list,
		i = 0;
	json_length = tweets.length;
	tweet_list = document.getElementById('tweet-list');
	tweet_list.innerHTML = '';
	for(;i < json_length;) {
		tweet = tweets[i];
		tweet_list.innerHTML += ('<li>' + tweet + '</li>');
		i = i + 1;
	}
};
$(function() {
  setButtonEvent();
});
