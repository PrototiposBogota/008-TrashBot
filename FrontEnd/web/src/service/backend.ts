// tslint:disable-next-line:one-variable-per-declaration

import {ILoginState, IUserToRegister} from '../widgets/common';


const API_URL = 'https://trashbot-2018.appspot.com/api/v1';
const API_AUTH = 'https://trashbot-2018.appspot.com';

export const API = {
    
    dataChart(url){
        return fetch(API_AUTH + url, {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: "GET",
        }).then(response => {
            if(response.ok) {
                return response.json()
            }else{
                throw new Error('Something bad happened' + response.status)
            }
        })
        .catch((error)=> {
            throw new Error('Something bad happened' + error)
        });
    },

    getNextEvents(){
        return fetch(`${API_URL}/eventos`, {
            headers: {
                'Authorization': sessionStorage.getItem('token') || '',
                "Content-Type": "application/json; charset=utf-8"
            },
        }).then(response => {
            if(response.ok) {
                return response.json()
            }else{
                throw new Error('Something bad happened' + response.status)
            }
        })
        .catch((error)=> {
            throw new Error('Something bad happened' + error)
        });
    },

    login(usuario:ILoginState) {
        
        return fetch(API_AUTH + '/auth/login', {
            body: JSON.stringify({ email:usuario.email, password: usuario.password }), 
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: "POST",
        })
        .then(response => {
            if(response.ok) {
                return response.json()
            }else{
                throw new Error('Something bad happened' + response.status)
            }
        })
        .catch((error)=> {
            throw new Error('Something bad happened' + error)
        });
    },

    register(newUser : IUserToRegister){
        return fetch(API_AUTH + '/auth/register', {
            body: JSON.stringify(newUser), 
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: "POST",
        })
        .then(response => {
            if(response.ok) {
                return response.json()
            }else{
                throw new Error('Something bad happened' + response.status)
            }
        })
        .catch((error)=> {
            throw new Error('Something bad happened' + error)
        });
    },
    
    sendMessage(text : string){

        const msj : any = {"mensaje" : {
            "input": {
              "text": text
        }}};

        return fetch(API_URL + '/chats', {
            body: JSON.stringify(msj), 
            headers: this.getHeaders(),
            method: "POST",
        }).then(response => response.json());
    }, getHeaders() {
        
        return {
            "Authorization": sessionStorage.getItem('token') || '',
            "Content-Type": "application/json; charset=utf-8",
        }
    }
}
