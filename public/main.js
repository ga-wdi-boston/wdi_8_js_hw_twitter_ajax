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

var render_tweets = function(json) {
  var tweet_html = "";
    var i = 0;
    for (; i < json.length; i++){
      var tweet;
      tweet = json[i];
      var j = i + 1;
      tweet_html += "<li>" + j + ". " + tweet +  "</li>"
    };
    document.getElementById('tweets-list').innerHTML = tweet_html;
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