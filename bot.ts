//Main point of communication with Ding, Tink, and Doc!

// Ty hydrabolt!
import * as Discord from 'discord.js';

// Config get
const config = require('./config.js'); 

var bot = new Discord.Client();

bot.on('ready', onReady);

function onReady() {
    console.log("OH BOY! IT'S " + bot.user + "!");
}

bot.on('message', onMessage);

function onMessage(message:Discord.Message) {
    if(message.author != bot.user) {
        console.log("u: " + message.author + ", client: " + message.client + ", ch: " + message.channel + ", msg: " + message.content + "msg:");
        console.log(message);
        message.channel.sendMessage("Ding: Howdy " + message.author + "!");
        message.channel.sendMessage("Tink: The Doctor will be with you momentarily!");
    }
}

bot.login(config.Token);