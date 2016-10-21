/**
 * Ding - he's the workhorse of the siblings.  He might also be a hoarder.
 */

// "BOT! TALK TO ME!"
import * as Discord from "discord.js";

// He's done his training... a couple times. Third time's the charm!
import {Employee} from "./employee";

// He needs his friends :D
import {Tink} from "./tink";
import {DongoMD} from "./doc";


export class Ding extends Employee {
    private Tink: Tink;
    private Doc: DongoMD;

    constructor(id){
        super("Ding", id);
    }

    // Ding never passes up the opportunity to grab some additional research
    //  As such, he'll take anything that comes his way
    public handleMessage(message: Discord.Message){
        // "DOOOOOC! I FOUND SOMETHING!"
        if(this.extractFirstWord(message.content)[0] !== "!"){
            this.Doc.addDocumentToDataStore(message);
        }
    }

}