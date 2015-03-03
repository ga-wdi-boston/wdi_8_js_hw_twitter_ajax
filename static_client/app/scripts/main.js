'use strict';

var TwitterApp = TwitterApp || {};

TwitterApp.populateField = function(){
  TwitterApp.setField();
  TwitterApp.findTweet();
};

TwitterApp.setField = function(){
  $('#tweets').html('');
};

TwitterApp.findTweet = function(){
  var name = $('#user_name').val();
  $.ajax({
      url: 'http://localhost:3000/users/' + name,
      type: 'GET'
    }).done(function(data){
      TwitterApp.displayTweets(data.tweets);
    });
};

TwitterApp.displayTweets = function(tweets){
  for (var i = 0; i < tweets.length; i++){
    TwitterApp.displayTweet(tweets[i]);
  }
};

TwitterApp.displayTweet = function(tweet){
  $('#tweets').append(TwitterApp.format(tweet));
};

TwitterApp.format = function(tweet){
  var textAr = tweet.text.split(' ');
  for (var i = 0; i < textAr.length; i++){
    if (textAr[i].slice(0,7) === 'http://'){
      textAr[i] = '<a href=' + textAr[i] + ' target=_blank>' + textAr[i] + '</a>';
    }
    if (textAr[i].slice(0,1) === '@'){
      textAr[i] = '<a href=https://twitter.com/' + textAr[i].replace(/[@]/g, '') + ' target=_blank>' + textAr[i] + '</a>';
    }
    if (textAr[i].slice(0,1) === '#'){
      textAr[i] = '<a href=https://twitter.com/hashtag/' + textAr[i].replace(/[#]/g, '') + '?src=hash target=_blank>' + textAr[i] + '</a>';
    }
  }
  var image = tweet.user.profile_image_url;
  if (tweet.retweeted_status){
    image = tweet.retweeted_status.user.profile_image_url;
  }


  return "<img src=" + image + ">" + '<li class=row>' + textAr.join(' ') + '</li>';
};


$(document).ready(function(){
  $('.btn').click(TwitterApp.populateField);
});
