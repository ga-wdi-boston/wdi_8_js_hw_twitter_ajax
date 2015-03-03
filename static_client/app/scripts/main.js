
'use strict';

console.log('\'hello \'hello!');



var App = App || {};

App.tweets = function(user_name){
  var user_name = $('#user_name').val();
  $.ajax({
    url: "http://localhost:3000/tweets/" + user_name,
    type: 'GET',
    dataType: 'JSON',
  });

};


$(document).ready(function(){
  $( "#tweets" ).click(function() {
  App.tweets($('#tweets').val());
  });
});
