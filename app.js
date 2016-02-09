var TwitterBot = require("node-twitterbot").TwitterBot;

var Bot = new TwitterBot({
  "consumer_secret": "ipqGlSBS7wAfgfCAqEr3Ta37Yddf56wni7DCWoY3E3tLh8ypjI",
  "consumer_key": "cnWpaixVjbdjIaSSEzA5XlTBP",
  "access_token": "4627187009-nkdomIRZzmtZVzy0NiOCUjQCbHAmbrsHE6I3dsD",
  "access_token_secret": "SORKApsLU8Bw6P6Bdlcq6CyNOjaNrGEdgOSZxtUm60WH4"
});

var newTweets = [
  "@roselpadilla: Times gettin' hard but a nigga still gettin' it.",
  "@roselpadilla: If at first you don't succeed, call it version 1.0.",
  "@roselpadilla: You had me at 'Hello World'",
  "@roselpadilla: Yeezy for President 2020!",
  "@roselpadilla: If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people don't appreciate the moment until it's passed. - Kanye West",
  "@roselpadilla: Get off your butt and do something.",
  "@roselpadilla: There’s lots of bad reasons to start a company. But there’s only one good, legitimate reason, and I think you know what it is: it’s to change the world. - Phil Libin, CEO of Evernote.",
  "@roselpadilla: https://www.youtube.com/watch?v=nk5SRhpitDI",
  "@roselpadilla: Go big or go home, fam. http://i.imgur.com/f77TnHe.gifv",
  "@roselpadilla: @GudMorningFaith, you ain't shit compared to me boi.",
  "@roselpadilla: Faith loves you very much.",
  "@roselpadilla: https://pbs.twimg.com/tweet_video/Cap8s2LUcAEW9qU.mp4",
  "@roselpadilla: yo no se...",
  "@roselpadilla: coders don't sleep all day, so stop.",
  "@roselpadilla: I triple dog dare you to start and finish an entire book today.",
  "@roselpadilla: You're weird....jk I like you!",
  "@roselpadilla: Silicon Valley ain't the place for mediocre bs so get up and change the world, k?",
  "@roselpadilla: I once walked 17 miles home, too...",
  "@roselpadilla: and I also stole a random bike...",
  "@roselpadilla: Reread Zero to One today!",
  "@roselpadilla: *gaasssssssp*",
  "@roselpadilla: Start a lifestyle youtube channel with your girl soon.",
  "@roselpadilla: You wanna hear some rhymes? n\ It's about timez. n\ Flow so sick, you'll think licking limez n\ is finez."
];

function autoTweet() {
  var index = Math.floor(Math.random() * newTweets.length)
  var randTweet = newTweets[index];
  Bot.tweet(randTweet);

  newTweets.splice(index, 1);
}

autoTweet();
