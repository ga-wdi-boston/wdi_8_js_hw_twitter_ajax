$(function() {
  
  $('#submit-button').click(function(event) {
    event.preventDefault();
    ajax_request($('#username-field').val());
  });
});

var ajax_request = function(user) {
  var xhr = new XMLHttpRequest();
  url = '/recent/' + user;
  xhr.open('GET', url, true);
  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
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

var render_tweets = function(tweets_json) {
  var tweets_html = "", 
      index = 0, 
      length = tweets_json.length,
      tweet_list;

  document.getElementById('tweenty-tweets').innerHTML = "";
  tweet_list = document.getElementById('tweenty-tweets');

  for (; index < length; ) {
    tweet_list.innerHTML += "<li>" + tweets_json[index] + "</li>";
    index += 1;
  }
};
