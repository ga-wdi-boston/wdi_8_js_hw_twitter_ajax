var 
screen_name
tweets, 
searchButton = document.getElementById('search-button'),
searchBox = document.getElementById('search-box').value;


var setButtonEvent = function() {
	searchButton.addEventListener('click', searchClickResponse);
};

var searchClickResponse = function () {
	getUserName();

};


var getUserName = function () {
	screen_name = searchBox.value
searchBox 
};


var render_tweets = function(screen_name) {
	console.log(screen_name);
};

var async_load_json = function(screen_name) {
	var parsed_json, xhr = new XMLHttpRequest(); 
	xhr.open("GET", "/tweets/"+ screen_name, true);
	xhr.onload = function(e) {
		if(xhr.readyState == 4) {
			if (xhr.status === 200) {
				parsed_json = JSON.parse(xhr.responseText);
				render_tweets(parsed_json);
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.send(null); 
};







