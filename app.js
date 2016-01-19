var TwitterBot = require("node-twitterbot").TwitterBot;

var Bot = new TwitterBot({
  "consumer_secret": "ipqGlSBS7wAfgfCAqEr3Ta37Yddf56wni7DCWoY3E3tLh8ypjI"
,
  "consumer_key": "cnWpaixVjbdjIaSSEzA5XlTBP",
  "access_token": "4627187009-nkdomIRZzmtZVzy0NiOCUjQCbHAmbrsHE6I3dsD",
  "access_token_secret": "SORKApsLU8Bw6P6Bdlcq6CyNOjaNrGEdgOSZxtUm60WH4"
  "TWITTER_SEARCH_PHRASE   = "read OR book OR thanks OR life min_retweets:2";"

});
var newTweets = ["@roselpadilla: You're so coder..","@roselpadilla: There are only two kinds of programming languages: those people always bitch about and those that nobody uses.","@roselpadilla: I have a crush on you...cause you're so coder.","@roselpadilla: Q. What's the object-oriented way to become wealthy? A. Inheritance.","@roselpadilla: You finna change the world?","@roselpadilla: Times gettin' hard but a nigga still gettin' it.","@roselpadilla: Q. Why do programmers always mix up Halloween & Christmas? A. Because Oct 31 === Dec 25.","@roselpadilla: You are the CSS to my HTML.","@roselpadilla: If at first you don't succeed, call it version 1.0.","@roselpadilla: Are you sitting on the F5 key? Because your ass is refreshing!","@roselpadilla: You had me at 'Hello World'"];
if (TWITTER_SEARCH_PHRASE){
  function autoTweet (){
 var r = Math.floor(Math.random() * (newTweets.length));
 Bot.tweet("r")
 };
