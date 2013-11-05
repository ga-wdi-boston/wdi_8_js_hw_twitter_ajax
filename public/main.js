window.onload = function() {
	var submitButton = document.getElementById('submit');
}

var render_tweets = function(tweets_json) {
	var tweets_json = tweets_json;
	tweets_html = ""
	i = 0;
	for (; i < tweets_json.length; i++) {
		var tweet_text = tweets_json[i];
		tweets_html += "<li>" + tweet_text + "</li>"
	};
	document.getElementById('tweets').innerHTML = tweets_html;
}