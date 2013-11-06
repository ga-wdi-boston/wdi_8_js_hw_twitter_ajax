$(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault();
    ajax_request($('#username-field').val());
  });
});

var ajax_request = function(user) {
  var url = '/recent/' + user;
  $.ajax({
    url: url,
    success: function(data) {
      render_tweets(data);
    }
  });
};

var render_tweets = function(tweets_json) {
  var tweets = $.parseJSON(tweets_json),
      tweets_html = "",
      index = 0, 
      length = tweets.length;

  $("#tweenty-tweets").empty();

  for (; index < length; ) {
    tweets_html += "<li>" + tweets[index] + "</li>";
    index += 1;
  }
  $("#tweenty-tweets").append(tweets_html);
};
