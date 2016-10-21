/**
 * Tink - she's the brains of the siblings. She could tell you almost anything you want to know... if she can just get access to her research
 */

// She skimmed through the training chart package - she's got it.
import {Employee} from "./employee";

// "Good morning, Bot"
import * as Discord from "discord.js";

// Research - research everywhere...
import {IMessage} from "../model/message";

// She appreciates her coworkers and their talents
import {Ding} from "./ding";
import {DongoMD} from "./doc";

export class Tink extends Employee {
    private Ding: Ding;
    private Doc: DongoMD;

    constructor(id){
        super("Tink", id);

        // "Back to work!"
        this.clockIn({
            "!Find": this.findDocument.bind(this),
            "!Tink": this.findDocument.bind(this)
        });
    };    

    /**
     *  "You're looking for what?"
     */
    findDocument(message: Discord.Message, body:string, command: string) {
        this.Doc.findDocument(message, body);
    }

    /**
     * "Thanks Doc!"
     */
    searchResults(message: Discord.Message, error:string, results: IMessage[] ) {
        if(!error) {
            var msg = "";
            results.forEach(function(message: IMessage, index: number, arr: IMessage[]) {
                msg += message.author + " " + message.date + ": " + message.message + (index !== (arr.length-1) ? "\n" : "");
            });

            if(msg === "") {
                msg = "Sorry, we don't have any information on that one...";
            }
            this.sendMessage(msg, message.channel);
        }
    }
}