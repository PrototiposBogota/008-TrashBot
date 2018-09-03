import {Injectable} from '@angular/core';
import {User} from '../auth/user';
import {Token} from '../auth/token';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from  'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Register } from '../register/register';

import { environment } from 'src/environments/environment.prod';

@Injectable()
export class LoginService {


    private apiUrl = environment.AUTH_URL || 'http://localhost:3000';
    private token: Token = new Token();

    constructor(private http: Http) {
    }

    login(user: User): Observable<Token> {
        
        let headers = new Headers({
            'email': user.email,
            'password': user.password
        });

        return this.http.post(this.apiUrl + '/auth/login', { email:user.email, password: user.password })
            .map((res: Response) =>  {
                let respuesta: any =  res.json();
                localStorage.setItem('token', respuesta.access_token);
                localStorage.setItem('logeado', 'true');
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json()));
    }

    save(register: Register): Observable<Register> {

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
            .catch((error: any) => Observable.throw(error.json()));

    }

    /* findById(id: number): Observable<Pais> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('xAuthToken'),
            'initToken': localStorage.getItem('xInitToken')
        });

        return this.http.get(this.apiUrl + '/' + id, { headers: headers })
            .map((res: Response) =>  {
                localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json()));
    }

    savePais(pais: Pais): Observable<Pais> {

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('xAuthToken'),
            'initToken': localStorage.getItem('xInitToken')
        });

        console.log("entro savePais");
        return this.http.post(this.apiUrl + '/create', pais, { headers: headers })
            .map((res: Response) =>  {
                localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res;
            })
            .catch((error: any) => Observable.throw(error.json()));

    }

    deletePaisById(id: number): Observable<boolean> {
        let headers = new Headers ({
         'Content-Type': 'application/json',
         'Authorization' : localStorage.getItem('xAuthToken'),
         'initToken': localStorage.getItem('xInitToken')
       });

       return this.http.delete(this.apiUrl + '/delete/' + id,{headers: headers})
            .map((res: Response) =>  {
                localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updatePais(pais: Pais): Observable<Pais> {
      let headers = new Headers ({
       'Content-Type': 'application/json',
       'Authorization' : localStorage.getItem('xAuthToken'),
       'initToken': localStorage.getItem('xInitToken')
      });

        return this.http.put(this.apiUrl +'/update', pais,{headers: headers})
        .map((res: Response) =>  {
            localStorage.setItem('xInitToken', res.headers.get('initToken'));
            return res;
        })
            .catch((error: any) => Observable.throw(error.json()));

    }

    findAll(): Observable<Pais[]> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('xAuthToken'),
            'initToken': localStorage.getItem('xInitToken')
        });

        return this.http.get(this.apiUrl + '/listado', { headers: headers })
            .map((res: Response) => {
                localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            }
        )
            .catch((error: any) => Observable.throw(error.json()));
    }
 */
}
