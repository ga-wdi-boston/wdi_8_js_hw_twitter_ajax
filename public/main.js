setTwitterSubmitEvent = function() {
	document.getElementById('twitter-submit').addEventListener('click', function(event) {
		event.preventDefault();
		var username = getTwitterHandle();	
		var url = "/" + username;
		async_load_json(url);
	});
};

var getTwitterHandle = function() {
	 return document.getElementById('twitter-handle').value;

};

var render_tweets = function(parsed_json) {
	var i = 0,
			json_length = parsed_json.length,
			tweet_list = document.getElementById('tweets');
	for(; i < json_length;) {
		tweet = parsed_json[i];
		tweet_list.innerHTML += "<li>" + tweet + "</li>";
		i = i + 1;
	}
};

var async_load_json = function(url) {
	var xhr = new XMLHttpRequest(),
			parsed_json;
	xhr.open("GET", url, true);
	xhr.onload = function(e) {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				parsed_json = JSON.parse(xhr.responseText);
				console.log(parsed_json);
				render_tweets(parsed_json);
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.send(null);
};

window.onload = function() {
	setTwitterSubmitEvent();
};

// Prevent default on submit button
// Grab user_name with event addEventListener
// Use that function in async_load_json to get the tweets and put them to the inner HTML of the page. 