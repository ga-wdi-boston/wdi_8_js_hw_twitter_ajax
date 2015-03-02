console.log('\'Allo \'Allo!');

TwitterApp = {};

TwitterApp.getTweets = function(username){
  $.ajax({
  url: 'http://localhost:3000/tweets/' + username,
  type: 'get',
  dataType: 'JSON',
  }).done(TwitterApp.directTweets);
};

$(document).ready(function(){

  $('#submit').on('click', function(){
    event.preventDefault();
    var $value = $('#twitter-user').val()
    TwitterApp.getTweets($value);
  });

});

TwitterApp.directTweets = function(object){
    var tweet;
    var html = '';
  object.tweets.forEach(function(tweet){
      tweet = new TwitterApp.Tweet(tweet);
      html += TwitterApp.render(tweet);
  })
  $('#tweets').append(html)
};

TwitterApp.Tweet = function(tweet){
  this.id = tweet.id
  this.text = tweet.text
};

TwitterApp.render = function(tweet){
  html = '<div id="' + tweet.id + '">';
  html += '<p>' + tweet.text + '</p>';
  html += '</div>';
  return html
};
