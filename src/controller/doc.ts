/**
 * Dongo MD (AKA Doc AKA the (good) doctor) - Not entirely sure everything he can do, but for now he will just store the twins research for them
 */

// The doc brought his trusty pet - she's smarter than she looks, don't worry
import * as Mango from "mongoose";

// Bot has taken a liking to the good doctor since he's shown up
import * as Discord from "discord.js"

// He was so excited to work with the twins that he finished his training before even signing the contract...
import {Employee} from "./employee";

import {Message, IMessageModel, messageSchema} from "../model/message";

// He's always happy to help his coworkers
import {Ding} from "./ding";
import {Tink} from "./tink";

export class DongoMD extends Employee {
    private Ding: Ding;
    private Tink: Tink;

    // Docs notebook. He keeps important stuff here. 
    private Models = {
        Message: Message
    }

    private db: Mango.Connection;

    constructor(id, location?: string) {
        super("Doc", id);

        // "Now where did Mango go off to today..."
        location = location || "mongodb://127.0.0.1:27017/DTND";
        Mango.connect(location);
        
        this.db = Mango.connection;

        this.db.on('open', this.onMangoFound);

        this.db.on('error', this.onMangoMissing);
    }

    /**
     * The doctor is kind of a work-a-haulic. If you need him, chances are he's there - the only question is where is Mango...
     */ 
    onMangoFound() {
        console.log("The doctor is in. We're looking at " + this.db.databaseName + ".");
    }

    /**
     * "Uh oh... MANGO? MANGO WHERE ARE YOU WE HAVE WORK TO DO!"
     */
    onMangoMissing(error) {
        console.log("Mango Error: " + error);
    }

    /**
     * "Mango - would you go file this for me?"
     */
    addDocumentToDataStore(message: Discord.Message) {
        new this.Models.Message({
            server: message.guild,
            channel: message.channel,
            author: message.author,
            message: message.content,
            date: message.timestamp
        }).save();
        // "Filed!" (or, atleast, incoherent mongoose noises that Doc interpreted to mean that)
    }

    /**
     * "Mango, Tink needs a file!"
     */
    findDocument(message: Discord.Message, search: string) {
        console.log(message.content);
        this.Models.Message.find({
            server: message.guild,
            channel: message.channel,
            message: {
                $regex: search
            }
        }, this.Tink.searchResults.bind(this.Tink, message));
    }
    
}