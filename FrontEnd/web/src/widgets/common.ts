export enum Page {
    Eventos, Chat
}

interface IMessage{
    cssClass: string,
    content: string,
    self: boolean,
    isTrash: boolean
}

export interface ILoginProps {
    classes: any;
    login: (usuario: ILoginState) => void
}

export interface ILoginState{
    email: string,
    password: string,
}

export class Message {
    public cssClass: string;
    public content: string;
    public self: boolean;
    public isTrash: boolean;

    constructor(message: IMessage = { cssClass: '', content: '', self: true, isTrash: false }) {
        this.cssClass = message.cssClass;
        this.content = message.content;
        this.self = message.self ;
        this.isTrash = message.isTrash ;
    }
}