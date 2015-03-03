'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

var App = (function(){
  var init = function(){
    getTweets('TweetsOfGrass'); //default tweets from whitman

    var $userForm = $('form#user-form');
    $userForm.on('submit',function(e){
    if(e.preventDefault) e.preventDefault();
    getTweets($('#username').val());
    });
  };

  var getTweets = function(username){
    $.ajax({
      url: 'http://localhost:3000/tweets/'+ username + '/',
      type:'GET',
      }).done(function(tweets){
        showTweets(tweets.tweets, username);
    }).fail(function(jqXHR, textStatus, errorThrown){
      trace(jqXHR, textStatus, errorThrown);
    });
  };

  var showTweets = function(tweets, username){

    $('#tweets').children().remove();
    $('#tweets').append('<h3>Tweets from '+ username + '</h3>')
    tweets.forEach(function(tweet){
      $('#tweets').append('<li>' + tweet + '</li>');
    });
  };


  return{
    init:init
  };

})();



$(document).ready(function(){
  App.init();
});


//console.log('\'Allo \'Allo!');
