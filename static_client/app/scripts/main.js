'use strict';

console.log('\'Allo \'Allo!');

var TwitterApp = TwitterApp || {};

$(document).ready(function(){
  TwitterApp.tweetsByUser.get();
});