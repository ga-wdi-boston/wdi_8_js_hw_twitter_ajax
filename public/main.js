'use strict';

var setButtonEvent = function() {
	$('#search-button').click(function(e){
    e.preventDefault();
    get_user_input();
  });
};

var get_user_input = function() {
	var search_box = $('#search-box')[0];
  var screen_name = search_box.value;
  load_json(screen_name);
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

// var async_load_json = function(screen_name) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', "/tweets/" + screen_name, true);
//   xhr.onload = function(e) {
//     if(xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         var parsed_json = JSON.parse(xhr.responseText);
//         render_tweets(parsed_json);
//       } else {
//       	console.error(xhr.statusText);
//       }
//     }
//   };
//   xhr.send(null);
// };

var render_tweets = function(tweet_string) {
	var json_length,
			tweet,
			tweet_list,
			i = 0;
  var tweets = $.parseJSON(tweet_string)
	json_length = tweets.length;
	tweet_list = $('#tweet-list')[0];
	tweet_list.innerHTML = '';
	for(;i < json_length;) {
		tweet = tweets[i];
		tweet_list.innerHTML += ('<li>' + tweet + '</li>');
		i = i + 1;
	}
};
 
window.onload = function() {
  setButtonEvent();
  fallingLeaves();
};
