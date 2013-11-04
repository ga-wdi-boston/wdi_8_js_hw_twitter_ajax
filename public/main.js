var async_load_json = function(url) {
	var parsed_json, xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function(e) {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				parsed_tweets = JSON.parse(xhr.responseText);
				list_tweets(parsed_tweets);
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.send(null);
};

var list_tweets = function(parsed_tweets) {
	var tweetList = document.getElementById('tweetlist');
	tweetList.innerHTML = "";

	var i = 0; for(; i < parsed_tweets.length; i++) {
		tweetList.innerHTML += "<li>" + parsed_tweets[i] + "</li>";
	};
};

var eventListeners = function() {
	var searchButton = document.getElementById('search-button');
	var searchField = document.getElementById('username-field');

	searchButton.addEventListener('click', function(event) {
		event.preventDefault();
		async_load_json(searchField.value + '.json');
	});
}

eventListeners();