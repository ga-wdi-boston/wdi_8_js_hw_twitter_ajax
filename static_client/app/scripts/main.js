var TwitterApp = (function(){

  var init = function(){
    $( "#myform" ).submit(function( event ) {
      event.preventDefault();
      var myUser = $('#search').val()
      sendUser(myUser);
    });
  };

  var showTweets = function(data){
    $('#tweets').append('<ul>')
    for (var i = 0; i < data.tweets.length; i++ ){
      $('#tweets').append('<li>' + data.tweets[i] + '</li>');
    }
    $('#tweets').append('<ul>')
  };

  var sendUser = function(data){
    $.ajax({
      url: 'http://localhost:3000/tweets/' + data,
      type: 'GET',
      dataType: 'JSON'
    })
    .done(function(results) {
      showTweets(results);
    });
  };

  return { init: init };

})();

$(document).ready(function(){
  TwitterApp.init();
});
