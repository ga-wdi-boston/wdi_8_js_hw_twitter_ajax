var App = App || {};

App.getTweets = function(){
  var $twitterUser = $('#twitter-username').val();
  debugger;
  $.ajax({
    url: 'http://localhost:3000/tweets/' + $twitterUser,
    type: 'GET',
    dataType: 'JSON'
  }).done(function(data){
    console.log(data);
  });
};

$(document).ready(function(){
  $('#find-tweets').on('submit', function(event){
    App.getTweets(event);
  });
});
