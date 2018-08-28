import {Injectable} from '@angular/core';
import {Pais} from './pais';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PaisService {


    private apiUrl = 'api/pais';


    constructor(private http: Http) {
    }

    findById(id: number): Observable<Pais> {
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

}
