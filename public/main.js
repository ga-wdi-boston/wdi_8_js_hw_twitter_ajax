window.onload = function() {
  var submit_button = document.getElementById('submit');

  submit_button.addEventListener('click', function(event) {
    event.preventDefault();
    submitButtonResponse();
  });

  submitButtonResponse = function() {
    var handleform = document.getElementById('handle-field')
    var handle = handleform.value;
    ajaxRequest(handle);
  };
};


var render_tweets = function(tweets_json) {
  var tweets_json = tweets_json;
  tweets_html = ""
  i = 0;
  for (; i < tweets_json.length; i++){
    var tweet_text = tweets_json[i];
    tweets_html += "<li>" + tweet_text + "</li>"
  };
  document.getElementById('tweets').innerHTML = tweets_html;
};



var ajaxRequest = function(user) {
  var request = new XMLHttpRequest();
  var url = '/twitter/' + user;
  request.open("GET", url, true);
  request.onload = function(e) {
    if(request.readyState === 4) {
      if(request.status === 200){
        parsed_json = JSON.parse(request.responseText);
        render_tweets(parsed_json);
      } else {
        console.error(request.statusText);
      };
    };
  };
  request.send(null);
};
