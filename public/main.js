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
  var tweets = $.parseJSON(tweets_json);

  $('#tweenty-tweets').empty();

  $(tweets).each(function(index, tweet) {
    $('#tweenty-tweets').append("<li>" + tweet + "</li>")
  });
};
