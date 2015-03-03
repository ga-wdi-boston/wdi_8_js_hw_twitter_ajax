'use strict';

console.log('\'Allo \'Allo!');

var TwitterApp = TwitterApp || {};

$(document).ready(function(){
  // var $userForm = $('form#user-form');
  // $userForm.on('submit', function(event) {
    TwitterApp.tweetsByUser.get();
  // });  
});