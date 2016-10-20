/**
 * All of the employees need to go to training to learn some basic skills. Here is what they learned!
 */

// Everyone has to go through bot protocol training...
import * as Discord from "discord.js";

export class Employee {
    constructor(public name: string, public id: Discord.User) {}

    /**
     * Mandatory user interaction training - remember: The customer is always right!
     */
    sendMessage(message: string, channel:Discord.Channel) {
        if(channel instanceof Discord.TextChannel) {
            channel.sendMessage("Incoming message from " + this.name + ": \n" + message);
        }
    }

    /**
     * Bot bought a ton of cell phones, so he made sure that there was training on how to use them
     */
    addContactsToPhone(contacts:any){
        for(var contact in contacts){
            // We know ourselves..
            if(contacts[contact] !== this) {
                this[contact] = contacts[contact];
            }
        }
    }
}