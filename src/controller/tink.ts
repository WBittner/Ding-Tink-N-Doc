/**
 * Tink - she's the brains of the siblings. She could tell you almost anything you want to know... if she can just get access to her research
 */

// She skimmed through the training chart package - she's got it.
import {Employee} from "./employee";

// She appreciates her coworkers and their talents
import {Ding} from "./ding";
import {DongoMD} from "./doc";

export class Tink extends Employee {
    private Ding: Ding;
    private Doc: DongoMD;

    constructor(id){
        super("Tink", id);
    };    
}