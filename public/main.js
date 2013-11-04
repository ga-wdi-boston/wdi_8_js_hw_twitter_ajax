
'use strict';
// // BLOCKING REQUEST
// var load_json = function(url) {
// 	var request = new XMLHttpRequest();
// 	request.open('GET', url, false);
// 	request.send(null);
 
// 	if (request.status === 200) {
// 		// console.log(request.responseText);
// 		return request.responseText;
// 	}
// };

var setButtonEvent = function() {
	var button = document.getElementById('search-button');
  button.addEventListener('click', function(e){
    e.preventDefault();
    get_user_input();
  });
};

var get_user_input = function(username) {
	var search_box = document.getElementById('search-box');
  var screen_name = search_box.value;
  async_load_json(screen_name);
};

var async_load_json = function(screen_name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "/tweets/" + screen_name, true);
  xhr.onload = function(e) {
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
        var parsed_json = JSON.parse(xhr.responseText);
        render_tweets(parsed_json);
      } else {
      	console.error(xhr.statusText);
      }
    }
  };
  xhr.send(null);
};

var render_tweets = function(parsed_json) {
	var json_length,
			tweet,
			tweet_list,
			i = 0;
	json_length = parsed_json.length;
	tweet_list = document.getElementById('tweet-list');
	tweet_list.innerHTML = '';
	for(;i < json_length;) {
		tweet = parsed_json[i];
		tweet_list.innerHTML += ('<li>' + tweet + '</li>');
		i = i + 1;
	}
};
 
window.onload = function() {
  setButtonEvent();
  fallingLeaves();
};
