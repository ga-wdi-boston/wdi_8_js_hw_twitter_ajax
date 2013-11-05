$(document).ready(function() {
  $('#submit').click(function(event){
    event.preventDefault();
    ajaxRequest($('#handle-field').val());
  });
});


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
  var url = '/twitter/' + user;
  $.ajax({
    dataType: "json",
    url: url,
    success: function(data) {
      render_tweets(data);
  } 
  });
};
