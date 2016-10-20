/**
 * Ding - he's the workhorse of the siblings.  He might also be a hoarder.
 */

// BOT! TALK TO ME!
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

    /**
     * Despite not always making the flashiest of discoveries, Ding is always on the
     *  lookout to gather data. Perhaps that's why there's so much lying around everywhere..
     */
    public handleMessage(message: Discord.Message) {
        if(message.author != this.id) {
            this.sendMessage("Howdy " + message.author + "!", message.channel);
            this.Tink.sendMessage("The Doctor will be with you momentarily!", message.channel);
        }
    }
}