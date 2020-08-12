/////////////////////////////////////
//This Twitter/Discord client is not secure and was not originally designed for public use, if amything goes wrong it is on you. Uncomment the next line of code to continue.
//var check = 1;
//////////////////////////////////
var Discord = require('discord.io');
var auth = require('./auth.json');

var Twitter = require('twitter');
var config = require('./config.js');
var client = new Twitter(config);
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
token: auth.token,
autorun: true
});
bot.on('ready', function (evt) {
});
console.log('success');
bot.on('disconnect', function(erMsg, code) {
bot.connect();
});
bot.on('message', function (user, userID, channelID, message, evt) {
console.log(message);
if (userID == '0000000000') { //Add the userID of your Discord account here to prevent random people from sendimg tweets to your Twitter page.
if (check === 1) { //This is some old code to help with verifying stuff, not really needed anymore.
bot.sendMessage({
to: channelID,
message: 'Tweeted!',
typing: true
});
client.post('statuses/update', {status: message}, function(error, tweet, response) {
});
return;
}
}
});
