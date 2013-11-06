$(document).ready(function() {
  $('#submit').click(function(event){
    event.preventDefault();
    ajaxRequest($('#handle-field').val());
  });
});


var render_tweets = function(json) {
  $(json).each(function(index, tweet) {
    $('#tweets-list').append("<li>" + tweet +  "</li>");
  });
  // var tweet_html = "";
  //   var i = 0;
  //   for (; i < json.length; i++){
  //     var tweet;
  //     tweet = json[i];
  //     var j = i + 1;
  //     tweet_html += "<li>" + j + ". " + tweet +  "</li>"
  //   };
  //   $('#tweets-list').append(tweet_html);
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