$(document).ready(function(){

  $.ajax({
    url: 'http://localhost:3000/tweets/beigesavage',
    type: 'GET'
  }).done(function(tweets){
    console.log("app: GET success");
    console.log("number of tweets: " + tweets.length);
    console.log(tweets);

    $('#tweets_div').append(tweets.tweets);

    //loop through elements in tweets array
    // tweets.forEach(function(tweets){
    //   $('.tweets_div').append('<p>' + tweet.tweets + '</p>');
    // });

// debugger;
  }).fail(function(jqXHR, textStatus, errorThrown){
    trace(jqXHR, textStatus, errorThrown);
  });


}); //end document ready
