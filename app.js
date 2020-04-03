var TwitterBot = require("node-twitterbot").TwitterBot;

var Bot = new TwitterBot({
  "consumer_secret": "ipqGlSBS7wAfgfCAqEr3Ta37Yddf56wni7DCWoY3E3tLh8ypjI",
  "consumer_key": "cnWpaixVjbdjIaSSEzA5XlTBP",
  "access_token": "4627187009-nkdomIRZzmtZVzy0NiOCUjQCbHAmbrsHE6I3dsD",
  "access_token_secret": "SORKApsLU8Bw6P6Bdlcq6CyNOjaNrGEdgOSZxtUm60WH4"
});

var newTweets = [
  "@imnotsavana: You are so beautiful!", 
  "@imnotsavana: WHAT YOU DOING OUT HERE WITH ALL THAT ASS???",
  "@imnotsavana: 10/10 would kiss u goodnight"
]

function autoTweet() {
  var index = Math.floor(Math.random() * newTweets.length)
  var randTweet = newTweets[index];
  Bot.tweet(randTweet);

  newTweets.splice(index, 1);
}

autoTweet();
