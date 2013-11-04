var search_box = document.getElementById("search-box"), 
search_button = document.getElementById("search-button"), 
tweets;

setButtonEvent = function() {
	search_button.addEventListener('click', function(e){
		e.preventDefault();
		get_user_input();
	});
};


get_user_input = function(screen_name) {
	screen_name = search_box.value;
	async_load_json(screen_name);
};

var render_tweets = function(tweets) {
	console.log(dogs_json);
};

var async_load_json = function(screen_name) {
	var parsed_json, xhr = new XMLHttpRequest();
	xhr.open("get", "/tweets/"+ screen_name, true);
	xhr.onload = function(e) {
		if(xhr.readyState === 4){
			if(xhr.status === 200){
			parsed_json = JSON.parse(xhr.responseText);
			render_tweets(parsed_json);
		} else {
			console.error(xhr.statusText);
		}
	}

	xhr.send(null);

};

setButtonEvent();