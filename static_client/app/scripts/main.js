'use strict';
var TwitterApp = TwitterApp || {};

$(document).ready(function(){
  $('form#user-form').on('submit', function(event){
    TwitterApp.getTweets(event);
  });
});

TwitterApp.getTweets = function(event){
  event.preventDefault();
  $.ajax({
    url:'http://localhost:3000/tweets/' + $('input#username').val(), // getting the value of whats entered in the input box
    type: 'GET'
  }).done(function(data){
    console.log(data);
  });
};

TwitterApp.renderTweets = function(data){
  for (var i = 0; i < data.length; i++){
    var html = '<div>' + data.tweets[i].text + '</div>';
    $('.row.marketing').append(html);
  }
};



