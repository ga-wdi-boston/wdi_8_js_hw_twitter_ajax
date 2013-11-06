$(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault();
    ajax_request($('#username-field').val());
  });
});

var ajax_request = function(user) {
  //var xhr = new XMLHttpRequest();
  var url = '/recent/' + user;
  $.ajax({
    url: url,
    success: function(data) {
      render_tweets(data);
    }
  });
  // xhr.open('GET', url, true);
  // xhr.onload = function(e) {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200) {
  //       parsed_json = JSON.parse(xhr.responseText);
  //       render_tweets(parsed_json);
  //     } else {
  //       console.error(xhr.statusText);
  //     }
  //   }
  // };
  // xhr.send(null);
};

var render_tweets = function(tweets_json) {
  var tweets = $.parseJSON(tweets_json),
      tweets_html = "",
      index = 0, 
      length = tweets.length;
      //tweet_list;

  // document.getElementById('tweenty-tweets').innerHTML = "";
  // $('#tweenty-tweets').innerHTML = "";
  // tweet_list = document.getElementById('tweenty-tweets');
  // tweet_list = $('#tweenty-tweets');

  for (; index < length; ) {
    // $('#tweenty-tweets').innerHTML += "<li>" + tweets_json[index] + "</li>";
    tweets_html += "<li>" + tweets[index] + "</li>";
    index += 1;
  }
  $("#tweenty-tweets").append(tweets_html);
};
