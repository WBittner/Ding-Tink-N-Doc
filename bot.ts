/**
 * The bot - main point of user communication with the team!
 */

// Ty hydrabolt!
import * as Discord from 'discord.js';

// Config get
const config = require('./config.js'); 

// Assemble the team
import {Ding} from "./src/controller/Ding";
import {Tink} from "./src/controller/Tink";
import {DongoMD} from "./src/controller/doc";

// Legooooo
var bot = new Discord.Client();

var ding:Ding, tink:Tink, doc:DongoMD;


bot.on('ready', function onReady() {
    console.log("OH BOY! IT'S " + bot.user + "!");
    ding = new Ding(bot.user);
    tink = new Tink(bot.user);
    doc = new DongoMD(bot.user);

    // The poor bot is just too busy being the POC for users to the team to handle the communication between the team members,
    //  so the bot gave them all cell phones and they can just direct call each other. (TL;DR: The boy- er... bot... is feeling lazy.)
    var contacts = {
        Ding: ding,
        Tink: tink,
        Doc: doc
    };

    // Time to put that training to use!
    ding.addContactsToPhone(contacts);
    tink.addContactsToPhone(contacts);
    doc.addContactsToPhone(contacts);

    // Want to have bot defer to the employees, not steal their functionality
    //  After all, the bot is no employee! He just doesn't have the bedside manner.
    bot.on('message', function(message) {
        // The bot doesn't care about the quarreling of the team members or the chat system itself,
        //  only the users.
        if(message.author != bot.user && !message.system) {
            ding.handleMessage.call(ding, message);
            tink.handleMessage.call(tink, message);
            doc.handleMessage.call(doc, message);
        }
    });
});

bot.login(config.token);