# Ajax, Sinatra and Twitter Homework

The goal of this homework is to have you exercise using basic Ajax requests, CSS, DOM manipulation, Ruby and Sinatra. 

## Assignment

In this assignment, you'll create a Twitter client ### that will show the last ~20 Tweets for any public Twitter user. #

The user will be presented with a 'search' box where they can input a valid Twitter username and hit 'search'. They will then be presented with a formatted list of Tweets that display asyncronously in the HTML.

Once you have completed this assignment, make this look great with CSS. 

### How

##- Use Sinatra and the Twitter gem to access Twitter. 
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

#<Twitter::User:0x007ffa143d6ee8
 @attrs=
  {:id=>16284748,
   :id_str=>"16284748",
   :name=>"Cori Allen",
   :screen_name=>"plainpioneer",
   :location=>"Boston, MA",
   :description=>
    "Web Development Immersive Student at General Assembly | Ruby, Rails, JavaScript Coder | Watch this, I'm gonna sneak attack thirds!",
   :url=>"https://t.co/FqkbinNXM5",
   :entities=>
    {:url=>
      {:urls=>
        [{:url=>"https://t.co/FqkbinNXM5",
          :expanded_url=>"https://github.com/callen6",
          :display_url=>"github.com/callen6",
          :indices=>[0, 23]}]},
     :description=>{:urls=>[]}},
   :protected=>false,
   :followers_count=>174,
   :friends_count=>271,
   :listed_count=>8,
   :created_at=>"Sun Sep 14 17:06:10 +0000 2008",
   :favourites_count=>16,
   :utc_offset=>-18000,
   :time_zone=>"Eastern Time (US & Canada)",
   :geo_enabled=>false,
   :verified=>false,
   :statuses_count=>558,
   :lang=>"en",
   :status=>
    {:created_at=>"Sat Nov 02 13:15:24 +0000 2013",
     :id=>396626597341433857,
     :id_str=>"396626597341433857",
     :text=>
      "bahaha, in @JSJabber 044,@littlecalculist \"Between consenting adults, I think people can write the kind of code they want to write.\" bravo!",
     :source=>"web",
     :truncated=>false,
     :in_reply_to_status_id=>nil,
     :in_reply_to_status_id_str=>nil,
     :in_reply_to_user_id=>nil,
     :in_reply_to_user_id_str=>nil,
     :in_reply_to_screen_name=>nil,
     :geo=>nil,
     :coordinates=>nil,
     :place=>nil,
     :contributors=>nil,
     :retweet_count=>0,
     :favorite_count=>0,
     :entities=>
      {:hashtags=>[],
       :symbols=>[],
       :urls=>[],
       :user_mentions=>
        [{:screen_name=>"JSJabber",
          :name=>"Javascript Jabber",
          :id=>456802802,
          :id_str=>"456802802",
          :indices=>[11, 20]},
         {:screen_name=>"littlecalculist",
          :name=>"David Meat Herman",
          :id=>104245499,
          :id_str=>"104245499",
          :indices=>[25, 41]}]},
     :favorited=>false,
     :retweeted=>false,
     :lang=>"en"},
   :contributors_enabled=>false,
   :is_translator=>false,
   :profile_background_color=>"9AE4E8",
   :profile_background_image_url=>
    "http://a0.twimg.com/profile_background_images/851421988/f0cb850e534ddaac415ac4ba2a01034b.jpeg",
   :profile_background_image_url_https=>
    "https://si0.twimg.com/profile_background_images/851421988/f0cb850e534ddaac415ac4ba2a01034b.jpeg",
   :profile_background_tile=>true,
   :profile_image_url=>
    "http://pbs.twimg.com/profile_images/2017231854/536019_1701154405248_1129560173_31914375_1296161852_n_normal.jpg",
   :profile_image_url_https=>
    "https://pbs.twimg.com/profile_images/2017231854/536019_1701154405248_1129560173_31914375_1296161852_n_normal.jpg",
   :profile_banner_url=>
    "https://pbs.twimg.com/profile_banners/16284748/1366824702",
   :profile_link_color=>"08C6D4",
   :profile_sidebar_border_color=>"000000",
   :profile_sidebar_fill_color=>"FCFADD",
   :profile_text_color=>"000000",
   :profile_use_background_image=>true,
   :default_profile=>false,
   :default_profile_image=>false,
   :following=>false,
   :follow_request_sent=>false,
   :notifications=>false}>
