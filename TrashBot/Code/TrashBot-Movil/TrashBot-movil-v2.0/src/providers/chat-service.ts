import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

export class ChatMessage {
  messageId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  toUserId: string;
  time: number | string;
  message: string;
  status: string;
}

export class UserInfo {
  id: string;
  name?: string;
  avatar?: string;
}

@Injectable()
export class ChatService {

  constructor(private http: HttpClient,
              private events: Events) {
  }

  mockNewMsg(text) {
    const mockMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: 'trashbot',
      userName: 'TrashBot',
      userAvatar: './assets/to-user.jpg',
      toUserId: 'you',
      time: Date.now(),
      message: text,
      status: 'success'
    };
    this.events.publish('chat:received', mockMsg, Date.now())
  }

  getMsgList(): Observable<ChatMessage[]> {
    const msgListUrl = './assets/mock/msg-list.json';
    return this.http.get<any>(msgListUrl)
    .pipe(map(response => response.array));
  }

  chatear(mensaje: ChatMessage){

  let msj : any = {"mensaje" : {
      "input": {
        "text": mensaje.message.trim()
      }}};

  let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token') || ''
  });

  let apiUrl = 'https://trashbot-api.herokuapp.com/api/v1/chats'

  return this.http.post(apiUrl, msj, { headers: headers }).toPromise()
    .then((res: Array<string>)=>{
      res.forEach(text => {
        this.mockNewMsg(text)
      });

    })
    .catch((error: any) => {
      console.log(error);
    });
  
}

  getUserInfo(): Promise<UserInfo> {
    const userInfo: UserInfo = {
      id: 'you',
      name: 'Tu',
      avatar: './assets/user.jpg'
    };
    return new Promise(resolve => resolve(userInfo));
  }

  getTrashbotInfo(): Promise<UserInfo> {
    const userInfo: UserInfo = {
      id: 'trashbot',
      name: 'Trasbot',
      avatar: './assets/user.jpg'
    };
    return new Promise(resolve => resolve(userInfo));
  }

}
