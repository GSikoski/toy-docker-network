import { Token } from "../api/models";

export class User {
    username:string;
    token:Token;

    constructor(username:string, token:Token){
        this.username=username;
        this.token=token;
    }
}
