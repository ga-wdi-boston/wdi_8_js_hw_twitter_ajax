$(document).ready(function() {
  $('#submit').click(function(event){
    event.preventDefault();
    ajaxRequest($('#handle-field').val());
  });
});

var render_tweets = function(tweets_json) {
  var tweets_array = $.parseJSON(tweets_json);
  // option 1
  //  $.each(tweets_array, function(index, tweet) {
  //   $('#tweets').append("<li>" + tweet + "</li>");
  // });
  // option 2
  $(tweets_array).each(function(index, tweet) {
    $('#tweets').append("<li>" + tweet + "</li>");
  });
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


