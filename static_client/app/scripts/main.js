console.log('\'Allo \'Allo!');

TweetsApp = {};
TweetsApp.getTweets = function(username){
  $.ajax({
  url: 'http://localhost:3000/tweets/' + username,
  type: 'get',
 dataType: 'JSON',
  }).done(TweetsApp.directTweets);
};

TweetsApp.Tweet = function(data){
  this.id = data.id
  this.text = data.text
};

TweetsApp.directTweets = function(data){
    var tweet;
   var html = '';
  data.tweets.forEach(function(tweet){
      tweet = new TweetsApp.Tweet(tweet);
      html += TweetsApp.render(tweet);
  })
  $('#tweets').append(html)
};



TweetsApp.render = function(data){
  html = '<div id="' + data.id + '">';
  html += '<p>' + data.text + '</p>';
  html += '</div>';
  return html
};

$(document).ready(function(){

  $('#search').on('click', function(){
    event.preventDefault();
    var $value = $('#user').val()
    TweetsApp.getTweets($value);
  });

});


