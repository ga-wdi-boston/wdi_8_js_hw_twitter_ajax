'use strict';

var $jumbo = $('#jumbo');
var $tweetList = $('#tweet-list');
var $search = $('#handleInput')

console.log('if you can read this, you are probably a web developer');

$(document).ready(function(){

  var $bigButton = $('#btnMain');
  $bigButton.on('click', function(){
    App.MyTweets(event);
    console.log('you just clicked the button, cheers!');
    console.log($search.val());
    $('h1').text('What the F@$% is @' + $search.val() + ' Tweeting??');
  });
});

var App = App || {};

App.MyTweets = function(){
  $.ajax({
    url: 'http://localhost:3000/tweets/' + $search.val(),
    type: 'GET',
    dataType: 'JSON'
  })
  .done(function(data) {
    console.log(data);
    for (var i = 0; i < data.tweets.length; i++) {
      var html = "<div class='tweet'>";
      html += "<p>" + App.addLinks(data.tweets[i]) + "</p>";
      html += "</div>";
      $tweetList.append(html);

      // var tweetz = "<a class='twitter-timeline' href='https://twitter.com/" + $search.val() + "' data-widget-id='572560535649275904'>Tweets by @$search.val()</a>";
      // $jumbo.append(tweetz);


    };
  })
  .fail(function() {
    console.log("try using better code");
    var puppy = "<img id='puppyFail' src='http://www.goodmeme.net/wp-content/uploads/2014/07/240_cute_dog_driving.jpg' alt='Smiley face'>"
    $jumbo.append(puppy);
  });

}

App.displayTweet = function(tweet){
  $tweetList.append(App.addLinks(tweet));
};

App.addLinks = function(text){
  var textAr = text.split(' ');
  for (var i = 0; i < textAr.length; i++){
    if (textAr[i].slice(0,7) === 'http://' || textAr[i].slice(0,8) === 'https://'){
      textAr[i] = '<a href=' + textAr[i] + ' target="_blank">' + textAr[i] + '</a>';
    } else if (textAr[i].slice(0,1) === '@'){
      textAr[i] = '<a href="https://twitter.com/' + textAr[i] + '" target="_blank">' + textAr[i] + '</a>';
    } else if (textAr[i].slice(0,1) === '#'){
      textAr[i] = "<a href='https://twitter.com/hashtag/" + textAr[i].replace(/[#]/g, '') + "?src=hash' target='_blank'>" + textAr[i] + "</a>";
    }
  }
  return textAr.join(' ');
};
