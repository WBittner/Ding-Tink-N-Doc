/**
 * All of the employees need to go to training to learn some basic skills. Here is what they learned!
 */

// Everyone has to go through bot protocol training...
import * as Discord from "discord.js";

export class Employee {
    public messageEvents: any;
    constructor(public name: string, public id: Discord.User) {
        this.messageEvents = {};
    }

    /**
     * Mandatory user interaction training - remember: The customer is always right!
     */
    public sendMessage(message: string, channel:Discord.Channel) {
        if(channel instanceof Discord.TextChannel) {
            channel.sendMessage("Incoming message from " + this.name + ": \n" + message);
        }
    }

    /**
     * Each employee is, of course, specialized within their fields
     */
    public handleMessage(message: Discord.Message) {
        var command:string = this.extractFirstWord(message.content);

        if(typeof this.messageEvents[command] === "function") {
            var body: string = message.content.substring(command.length + 1);
            this.messageEvents[command](message, body, command);
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

    /**
     * To make sure everyone is accounted for, employees were given training on how to clock in -
     *  including how to make note of what they're doing this shift.
     */
    clockIn(tasks: any) {
        for(var task in tasks) {
            this.messageEvents[task] = tasks[task];
        }
    }

    /**
     * Understanding what the user wants really is an important trait in an employee
     */
    extractFirstWord(s: string): string {
        return s.split(" ")[0];
    }
}
