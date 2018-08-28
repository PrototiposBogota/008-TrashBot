import {User} from './user.model';

export class Message {
    public cssclass: string;
    constructor(public from: User, public content: string) {

    }
}