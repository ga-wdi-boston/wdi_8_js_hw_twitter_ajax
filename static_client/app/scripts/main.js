//create a box for the user to enter a username to populate all the tweets for that user
'use strict';
var App = App || {};

App.get_user_tweets = function(event, user){
  var place = $('#user_name').val();
  $.ajax({
    url: "http://localhost:3000/tweets/" + place,
    type: 'GET',
    dataType: 'JSON',
  })
  .done(function(data) {
    App.render_all_tweets(data);
  });
};

App.render_all_tweets = function(tweets){
  $('.tweets').html("");
  var html = "";
  html += "<ul>";
  for(var i = 0; i < tweets.tweets.length; i++){
    html += "<li>" + tweets.tweets[i] + "</li>";
    html += "<br>"
  };
  html += "</ul>";
  $('.tweets').append(html);
};

$(document).ready(function(){
  $( "#target" ).click(function() {
  App.get_user_tweets($('#target').val());
  });
});
