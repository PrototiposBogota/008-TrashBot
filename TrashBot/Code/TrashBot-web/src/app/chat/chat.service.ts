import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Message} from './model/message.model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ChatService {
    private apiUrl = environment.API_URL || 'http://localhost:3000';

    constructor(private http: Http) {
        
    }

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    });

    chatear(mensaje: Message): Observable<any>{

        let msj : any = {"mensaje" : {
            "input": {
              "text": mensaje.content
            }}};

        return this.http.post(this.apiUrl + '/chats', msj, { headers: this.headers })
            .map((res: Response) =>  {
                // console.log(res.json());
                return res.json();
            })
            .catch((error: any) => {
                //debugger;
                return Observable.throw(error.json());
            });
    }
}