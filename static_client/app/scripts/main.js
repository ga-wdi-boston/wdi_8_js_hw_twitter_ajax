var App = App || {};

$(document).ready(function(){

	$('#submit').on('click', function(event){
		$twitterhandle = $('#userid').val();
		App.getTweets(event, $twitterhandle);
	});
});


App.getTweets = function(event, id){
	$.ajax({
		url: 'http://localhost:3000/tweets/'+id,
		type: 'GET',
	}).done(function(data){
		App.displayTweets(data);
	}).fail(function(){
		$('#displayarea').html('Please enter a valid Twitter Handle');
	});
};

App.displayTweets = function(data){
	var html = '';
	for(var i=0; i<data.tweets.length; i++){
		var date = $.format.date(data.tweets[i].created_at, "MM/dd/yyyy");
		html += '<div class="tweet"><h4>'+date+'</h4>'+data.tweets[i].text+'</div><br>'
	}

	$('#displayarea').html(html);
};

