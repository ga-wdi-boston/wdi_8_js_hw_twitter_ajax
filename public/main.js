$(document).ready(function() {
  $('#submit').click(function(event){
    event.preventDefault();
    ajaxRequest($('#handle-field').val());
  });
});

var render_tweets = function(tweets_json) {
  var tweets_array = $.parseJSON(tweets_json)
  tweets_html = ""
  i = 0;
  for (; i < tweets_array.length; i++){
    var tweet_text = tweets_array[i];
    tweets_html += "<li>" + tweet_text + "</li>"
  };
  $('#tweets').append(tweets_html);
};

var ajaxRequest = function(user) {
  var url = '/twitter/' + user;
  $.ajax({
    url: url,
    success: function(data) {
      render_tweets(data);
    } 
  });
};