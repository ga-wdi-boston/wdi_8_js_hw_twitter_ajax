var App = App || {};

App.Tweet = function(remoteTweet){
  this.text = remoteTweet.text;
};

App.Tweet.prototype.render = function(){
  var html = "<p>" + this.text + "</p>";
  return html;
};

App.tweetHandler = function(remoteTweets){
  var html = "<ul>", tweet;

  remoteTweets.forEach(function(remoteTweet){
    tweet = new App.Tweet(remoteTweet);
    html += tweet.render();
  })

  html += "</ul>";
  $('.tweets').append(html);
};

App.getTweets = function(){
  var $twitterUser = $('#twitter-username').val();

  $.ajax({
    url: 'http://localhost:3000/tweets/' + $twitterUser,
    type: 'GET',
    dataType: 'JSON'
  }).done(function(data){
    console.log(data);
    App.tweetHandler(data);
  });
};

$(document).ready(function(){
  $('#find-tweets').on('submit', function(event){
    App.getTweets(event);
  });
});
