
var Twitter = require('twitter');
require('dotenv/config')

var client = new Twitter({
    consumer_key: process.env.apikey
  , consumer_secret: process.env.apikeysecret
  , bearer_token: process.env.bearertoken
});
 
var params = {screen_name: 'danielq02',
              count: 5};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(tweets);
    for(let i = 0; i < tweets.length; i++){
      // trae la info del usuario que realizo el tweet
      console.log(tweets[i].user.screen_name)
      // trae el tweet
      console.log(tweets[i].text)
      // return tweets[i].text
    }
  }
});
