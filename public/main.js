'use strict';
window.onload = function(){
  var submitButton= document.getElementById("search"),
  username= document.getElementById("username");

  submitButton.addEventListener("click", function(event){
      event.preventDefault();
      submitButtonResponse();
    });

  var submitButtonResponse = function(){
      var url = username.value
      async_load_json('/' + url);
    };
  };

////
var render_tweets = function(tweets_json){
      var i = 0, tweet,
      max = tweets_json.length,
      tweet_list = document.getElementById('tweets');

  for (;i< max;){
    tweet = tweets_json[i]
    tweet_list.innerHTML += "<li>" + tweet + "</li>";
    i = i + 1;

  }
  // document.getElementById('tweets').innerHTML += tweet_list;
};


var async_load_json = function(url){
  var parsed_json, xhr = new XMLHttpRequest();
  // the 'true' below says asych = true
  xhr.open("GET", url, true);
  xhr.onload = function(e) {
    // readyState are 1-4
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
        parsed_json = JSON.parse(xhr.responseText);
        render_tweets(parsed_json);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.send(null);
};
