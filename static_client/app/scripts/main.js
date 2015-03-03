console.log('\'Allo \'Allo!');
'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

var display = function(data){
  var string = '';
  for(var i = 0; i < data.length; i++){
    string += '<p>' + data[i].user_name + '</p>';
    $('.tweets').html(string);
  };
};

var App = App || {};

App.submitUserName = function(event){
  if(event.preventDefault) event.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/tweets',
    type: 'POST',
    datatype: 'JSON',
    data: {
      tweet:{
        userName: $('#userName').val(),
      }
   },
  }).done(function(data){
    trace(data);
  }).fail(function(jqXHR, textStatus, errorThrown){
    trace(jqXHR, textStatus, errorThrown);
  });
  return false;
};

App.displayTweet = function(event){
  if(event.preventDefault) event.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/tweets',
    type: 'GET',
  }).done(function(data){
    trace(data);
    display(data);
  }).fail(function(jqXHR, textStatus, errorThrown){
    trace(jqXHR, textStatus, errorThrown);
  });
  return false;
};

$(document).ready(function(){
   var $searchForm = $('form#new-search-form');
  $searchForm.on('submit', function(event){
    App.submitUserName(event, $searchForm);
    App.displayTweet(event);
  });
});
