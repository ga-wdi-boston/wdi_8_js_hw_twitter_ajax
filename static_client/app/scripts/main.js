var App = App || {};

App.getTweets = function(){
  var $findTweets = $('#find-tweets').val();

  $.ajax({
    url: 'http://localhost:3000/tweets' + $findTweets,
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
