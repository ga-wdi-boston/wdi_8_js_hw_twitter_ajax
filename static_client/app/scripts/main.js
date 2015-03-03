'use strict';
console.log('\'Allo \'Allo!');

var TweetsApp = {};
TweetsApp.getTweets = function(data){
  $.ajax({
  url: 'http://localhost:3000/tweets/' + $('#user').val(),
  type: 'get',
 dataType: 'JSON',
  }).done(function(data){
    TweetsApp.renderTweets(data);
    console.log(data);

})
}


TweetsApp.renderTweets = function(data){
  for(var i = 0; i < data.tweets.length; i++){
    var html = '<div>' + data.tweets[i].text + '</div>';
    $('.row.marketing').append(html)
  }

};




$(document).ready(function(){

  $('#search').on('click', function(){
    event.preventDefault();
    var $value = $('#user').val()
    TweetsApp.getTweets($value);
  });

});


