import { Injectable } from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

import { RegisterObj } from '../../pages/register/registerObj';
import {User} from '../../app/auth/user';
import {Token} from '../../app/auth/token';


/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  
  private apiUrl = 'http://localhost:3000';
  //private token: Token = new Token();

  constructor(private http: Http) {
  }

  login(user: User): Observable<Token> {
      
    debugger;
      /* let headers = new Headers({
          'email': user.email,
          'password': user.password
      }); */
      return this.http.post(this.apiUrl + '/auth/login', { email:user.email, password: user.password })
          .map((res: Response) =>  {

            debugger;
              let respuesta: any =  res.json();
              localStorage.setItem('token', respuesta.access_token);
              localStorage.setItem('logeado', 'true');
              return res.json();
          })
          .catch((error: any) => {
            return this.handleError(error);
          });
  }

  handleError(error) {
    debugger;
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
    }

  /* onError(res: Response) {
    const statusCode = res.status;
    const body = res.json();
    const error = {
      statusCode: statusCode,
      error: body.error
    };
    return throwError(error);
  }
 */
   save(register: RegisterObj): Observable<RegisterObj> {

      let headers = new Headers({
          'Content-Type': 'application/json'
      });
      debugger;
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
  
}
