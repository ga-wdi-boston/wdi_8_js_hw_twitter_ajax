console.log('\'Allo \'Allo!');

var getTweets = function(){
  $.ajax({
    url:'http://localhost:3000/tweets/j_gruta',
    type: 'GET'
  }).done(function(tweets){
    console.log(tweets);
  });
};


$(document).ready(function(){
  getTweets();
});
