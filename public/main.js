$(function() {
  // var submit_button = $('#submit-button')[0];
  // var username_field = $('#username-field')[0];

  // submit_button.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   submitButtonResponse();
  // });
  $('#submit-button').click(function(event) {
    event.preventDefault();
    submitButtonResponse();
  });

  submitButtonResponse = function() {
    var form = document.getElementById('username-field');
    var username = form.value;
    ajax_request(username);
  };

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
});