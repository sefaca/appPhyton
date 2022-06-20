import { LEVELS } from "./levels.enum";


export class Task {
    name = '';
    subname = '';
    email = '';
    conected = true;

    constructor (name, subname, email, conected) {
        this.name = name;
        this.subname = subname;
        this.email = email;
        this.conected = conected;
        
    }


}

