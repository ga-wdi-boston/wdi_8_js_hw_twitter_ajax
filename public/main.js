
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

var render_tweets = function(tweets_json) {
	var json_length,
			tweet,
			tweet_list,
			i = 0;
	json_length = tweets_json.length;
	tweet_list = document.getElementById('tweet-list');
	for(;i < json_length;) {
		tweet = tweets_json[i];
		tweet_list.innerHTML += ('<li>' + tweet.text + '</li>');
		i = i + 1;
	}
};

var async_load_json = function(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
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
 
async_load_json('/tweets.json');
