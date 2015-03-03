'use strict';

var TwitterApp = TwitterApp || {};

$(document).ready(function(){
  var $userForm = $('form#user-form');
  console.log($userForm);
  $userForm.on('submit', function(event) {
    event.preventDefault();
    TwitterApp.tweetsByUser.get($('#username').val());
  });  
});