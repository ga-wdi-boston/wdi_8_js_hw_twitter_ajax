//My code
// $(document).ready(function(){

//   $.ajax({
//     url: 'http://localhost:3000/tweets/beigesavage',
//     type: 'GET'
//   }).done(function(tweets){
//     console.log("app: GET success");
//     console.log("number of tweets: " + tweets.tweets.length);
//     console.log(tweets);

//     $('#tweets_div').append(tweets.tweets);

//     //loop through elements in tweets array
//     // tweets.forEach(function(tweets){
//     //   $('.tweets_div').append('<p>' + tweet.tweets + '</p>');
//     // });

// // debugger;
//   }).fail(function(jqXHR, textStatus, errorThrown){
//     trace(jqXHR, textStatus, errorThrown);
//   });

// }); //end document ready

/////////////////////////////////////////////////
//In class review: using a twitter handle search field
var App = App || {};

App.getTweets = function(event){
  event.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/tweets/' + $('input#username').val(),
    type: 'GET'
  }).done(function(data){
    console.log(data);
    console.log(data.tweets.length);
    App.renderTweets(data);

  }).fail();

};//end App.getTweets

App.renderTweets = function(data){
  for(var i=0; i < data.tweets.length; i++){
    var html = '<div>' + data.tweets[i].text + '</div>';
    $('.row.marketing').append(html);
}

};//end App.renderTweets

$(document).ready(function(){
  //capture the form submit
  $('form#user-form').on('submit', function(event){
    App.getTweets(event)
  });

}); //end document ready
