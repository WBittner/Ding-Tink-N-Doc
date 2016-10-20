/**
 * Dongo MD (AKA Doc AKA The Doctor) - Not entirely sure everything he can do, but for now he will just store the twins research for them
 */

// The doc brought his trusty pet - she's smarter than she looks, don't worry
import * as Mango from "mongoose";

// He was so excited to work with the twins that he finished his training before signing a contract...
import {Employee} from "./employee";

// He's always happy to help his coworkers
import {Ding} from "./ding";
import {Tink} from "./tink";

export class DongoMD extends Employee {
    private Ding: Ding;
    private Tink: Tink;

    private db: Mango.Connection;

    constructor(id, location?: string) {
        super("Doc", id);

        location = location || "mongodb://127.0.0.1:27017/DTND";
        Mango.connect(location);
        
        this.db = Mango.connection;

        this.db.on('open', this.onConnectionOpen);

        this.db.on('error', this.onMangoError);
    }

    /**
     * The doctor is kind of a work-a-haulic. If you need him, chances are he's there.
     */ 
    onConnectionOpen() {
        console.log("The doctor is in. We're looking at " + this.db.databaseName + ".");
    }

    /**
     * Uh oh... MANGO? MANGO WHERE ARE YOU WE HAVE WORK TO DO!
     */
    onMangoError(error) {
        console.log("Mango Error: " + error);
    }
    
}