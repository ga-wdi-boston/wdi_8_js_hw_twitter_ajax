$(document).ready(function(){

//on keyup in text field
$('#search_field').keyup(function(){
  //capture value in seach field
  var searchUser = $('#search_field').val();
  // console.log(searchUser); //test outputting field values as you type

  //clear html output divs between each keyup event
  $('#tweets_count').html('');
  $('#handle').html('');
  $('#update').html('');


  $.ajax({
    url: 'http://localhost:3000/tweets/' + searchUser,
    type: 'GET'
  }).done(function(data){
    // console.log(data);
    // console.log(data.tweets.length);

    //output number of tweets
    $('#tweets_count').html(data.tweets.length);

    //output each tweet
    $('#update').append('<ul>');
    for(var i=0; i < data.tweets.length; i++){
      var html = '<li>' + data.tweets[i].text + '</li>';
      $('#update').append(html);
    };//for loop
    $('#update').append('<ul>');

  }).fail();
  });//end keyup
}); //end document ready

