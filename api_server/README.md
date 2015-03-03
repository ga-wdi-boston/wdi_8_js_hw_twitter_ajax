# Ajax, Rails and Twitter Lab

The goal of this lab is to have you exercise building a basic Restful API to wrap an external API (Twitter) with Rails

## Assignment

In this assignment, you'll create a Twitter client in JavaScript that will show the last ~20 Tweets for any public Twitter user, consuming an API that you build in Rails.

The user will be presented with a 'search' box where they can input a valid Twitter username and hit 'search'. They will then be presented with a formatted list of Tweets that display asyncronously in the HTML.

Once you have completed this assignment, make this look great with CSS.

### How

- Create a developer account and application on Twitter, and get access to your API keys. Store these *securely* in Rails.
- Use Rails along with the [Twitter gem](https://github.com/sferik/twitter) to access Twitter.
- Use a simple HTML form to send a `GET` request to the Rails API, asking for `json` to be returned. *You'll have to remember how to use events triggered by form button input*.
- Use a `callback` to display the tweets on screen.

### About the Static Client directory

I've used [Yeoman](yeoman.io) to scaffold this directory. The part you modify is in the app directory. You'll want to run `grunt serve` which will then open a web browser for you, automatically refresh changes, and run a javascript linter on your code every time you save (kinda awesome right?).

Its got jQuery and Bootstrap built in already, but doesn't force you into any other structure. Don't mess with the bower and Grunt configuration for the moment, as it isn't needed and will make things more complicated.

### Hints

- Don't check your Twitter API keys into version control
- Make sure you use a good JavaScript pattern (namespace or module) to structure your app.
- Consider how you might document this API
- How would you test this with Rspec and *request specs*. How do you test the jQuery with Jasmine?
- How can you fake the API until you make it work?
- No database is needed in your Rails API

## Reading

- JavaScript: Definitive Guide, Chapter 18, Section 1

## Bonus

- Figure out how to deploy this Rails application to Heroku, and the static assets to Github Pages
- Figure out how to use events to create an infinite scroll of the user's tweets
