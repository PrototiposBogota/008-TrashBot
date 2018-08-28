import {Injectable} from '@angular/core';
import {Evento} from './evento';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'src/environments/environment.prod';

@Injectable()
export class EventoService {


    private apiUrl = environment.API_URL || 'http://localhost:3000';

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    });


    constructor(private http: Http) {
        console.log(this.apiUrl);
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
    } */

    saveEvento(evento: Evento): Observable<Evento> {
   
        return this.http.post(this.apiUrl + '/eventos/', evento, { headers: this.headers })
            .map((res: Response) =>  {
                debugger;
               // localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json()));

    }

/*     deletePaisById(id: number): Observable<boolean> {
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
    } */

/*     updatePais(pais: Pais): Observable<Pais> {
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
 */
     findAll(): Observable<Evento[]> {

        return this.http.get(this.apiUrl + '/eventos', { headers: this.headers })
            .map((res: Response) => {
                return res.json();
            }
        )
            .catch((error: any) => Observable.throw(error.json()));
    }

}
