var TwitterBot = require("node-twitterbot").TwitterBot;

var Bot = new TwitterBot({
  "consumer_secret": "ipqGlSBS7wAfgfCAqEr3Ta37Yddf56wni7DCWoY3E3tLh8ypjI",
  "consumer_key": "cnWpaixVjbdjIaSSEzA5XlTBP",
  "access_token": "4627187009-nkdomIRZzmtZVzy0NiOCUjQCbHAmbrsHE6I3dsD",
  "access_token_secret": "SORKApsLU8Bw6P6Bdlcq6CyNOjaNrGEdgOSZxtUm60WH4"
});

var newTweets = [
  "@roselpadilla: You're so coder..",
  "@roselpadilla: There are only two kinds of programming languages: those people always bitch about and those that nobody uses.",
  "@roselpadilla: I have a crush on you...cause you're so coder.",
  "@roselpadilla: Q. What's the object-oriented way to become wealthy? A. Inheritance.",
  "@roselpadilla: You finna change the world?",
  "@roselpadilla: Times gettin' hard but a nigga still gettin' it.",
  "@roselpadilla: Q. Why do programmers always mix up Halloween & Christmas? A. Because Oct 31 === Dec 25.",
  "@roselpadilla: You are the CSS to my HTML.",
  "@roselpadilla: If at first you don't succeed, call it version 1.0.",
  "@roselpadilla: Are you sitting on the F5 key? Because your ass is refreshing!",
  "@roselpadilla: You had me at 'Hello World'"
  "@roselpadilla: Yeezy for President 2020!",
  "@roselpadilla: If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people don't appreciate the moment until it's passed. - Kanye West",
  "@roselpadilla: Get off your butt and do something.",
  "@roselpadilla: There’s lots of bad reasons to start a company. But there’s only one good, legitimate reason, and I think you know what it is: it’s to change the world. - Phil Libin, CEO of Evernote.",
  "@roselpadilla: https://www.youtube.com/watch?v=nk5SRhpitDI",
  "@roselpadilla: The best thing about a boolean is even if you are wrong, you're only off by a bit.",
  "@roselpadilla: The trouble with programmers is that you can never tell what a programmer is doing until its too late.",
  "@roselpadilla: http://watchitvideos.com/ex-machina-2015-free-online36-putlocker2/",
  "@roselpadilla: Your girlfriend loves you very very very very much.",
];

function autoTweet() {
   var rand = newTweets[Math.floor(Math.random() * newTweets.length)];
   Bot.tweet(rand);
   newTweets.splice(rand);
 }

autoTweet();
