import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from "../models/user";
import { Token } from "../models/token";
import { RegisterObj } from "../models/registerObj"


@Injectable()
export class UserData {

  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  //private apiUrl = 'http://localhost:3000';
  private apiUrl = 'https://trashbot-api.herokuapp.com';

  constructor(
    public events: Events,
    public storage: Storage,
    private http: Http
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  /* login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  }; */

  login(user: User): Observable<Token> {
      
    // debugger;
      /* let headers = new Headers({
          'email': user.email,
          'password': user.password
      }); */
      return this.http.post(this.apiUrl + '/auth/login', { email:user.email, password: user.password })
          .map((res: Response) =>  {

            // debugger;
              let respuesta: any =  res.json();

              this.storage.set(this.HAS_LOGGED_IN, true);
              this.setUsername(user.email);
              this.events.publish('user:login');

              localStorage.setItem('token', respuesta.access_token);
              localStorage.setItem('logeado', 'true');

              return res.json();
          })
          .catch((error: any) => {
            return this.handleError(error);
          });
  }

  handleError(error) {
    // debugger;
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

/*   signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };
 */

signup(register: RegisterObj): Observable<RegisterObj> {

  let headers = new Headers({
      'Content-Type': 'application/json'
  });
  // debugger;
  console.log("entro savePais");
  return this.http.post(this.apiUrl + '/auth/register', register, { headers: headers })
      .map((res: Response) =>  {
          localStorage.setItem('xInitToken', res.headers.get('initToken'));
          return res.json();
      })
      .catch((error: any) => {
        return this.handleError(error);
      });

} 




  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };
}
