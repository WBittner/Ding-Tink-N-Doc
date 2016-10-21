/**
 * The Research - Doc likes to keep his research very orderly. He's designed up a system to store everything as follows
 */

// Doc never leaves home without her, apparently... She does seem quite useful.
import * as Mango from "mongoose";

export interface IMessage {
    server: String,
    channel: String,
    author: String,
    message: String,
    date: Date
}

export interface IMessageModel extends IMessage, Mango.Document {}

export var messageSchema = new Mango.Schema({
    server: String,
    channel: String,
    author: String,
    message: String,
    date: Date
});

export var Message = Mango.model<IMessageModel>("Message", messageSchema);