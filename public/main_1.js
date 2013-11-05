var Twitter = {
	myButton: document.getElementById("search"),
	userField: document.getElementById("user-field"),

	setButtonEvent: function(){
		Twitter.myButton.addEventListener("click", function(event){
			event.preventDefault();
			var name = Twitter.userField.value; 
			async_load_json("/twitter/"+name+".json");
		});
	},

};

window.onload = function() {
Twitter.setButtonEvent();
};

var render_tweets = function(tweets_json){
	i = 0,
	max = tweets_json.length;
	for (; i < max;){
		document.getElementById("test").innerHTML += "<h1>" + tweets_json[i].name+ "</h1>";
		i = i +1;
		}
};

var async_load_json = function(url){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				parsed_json = JSON.parse(xhr.responseText);
				render_tweets(parsed_json);
			}else{
				console.error(xhr.statusText);
			}
		}
	}
	xhr.send(null);
};
