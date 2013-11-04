# Ajax, Sinatra and Twitter Homework

The goal of this homework is to have you exercise using basic Ajax requests, CSS, DOM manipulation, Ruby and Sinatra. 

## Assignment

In this assignment, you'll create a Twitter client that will show the last ~20 Tweets for any public Twitter user. 

The user will be presented with a 'search' box where they can input a valid Twitter username and hit 'search'. They will then be presented with a formatted list of Tweets that display asyncronously in the HTML.

Once you have completed this assignment, make this look great with CSS. 

### How

- Use Sinatra and the Twitter gem to access Twitter. 
- Use a simple HTML form to send a `GET` request to Sinatra, asking for `json` to be returned. *You'll have to remember how to use events triggered by form button input*. 
- Use an AJAX request to make the request.
- Use a `callback` to display the tweets on screen.  

### Hints

- Don't check your Twitter API keys into version control
- Make sure you use `window.onload`
- No database is needed
- ERB views are optional, and all of this can be done in a static HTML file(s).

## Reading

- JavaScript: Definitive Guide, Chapter 18, Section 1. 

## Bonus

- Figure out how to deploy this Sinatra application to Heroku. 
- Figure out how to use events to create an infinite scroll of the user's tweets