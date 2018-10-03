export enum Page {
    Eventos, Chat, Register, ForgotPassword, Landing
}

interface IMessage{
    cssClass: string,
    content: string,
    self: boolean,
    isTrash: boolean
}

export interface IUserToRegister {
    name: string,
    email: string,
    password: string,
    direccion: string,
    fecha: string
}

export interface IHomeProps{
    page : Page,
    register: (newUser: IUserToRegister) => void
}

export interface IClassesProps {
    classes: any;
}

export interface IRegisterProps {
    classes: any;
    register: (newUser: IUserToRegister) => void
}

export interface ILoginProps {
    goToRegister: () => void    
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