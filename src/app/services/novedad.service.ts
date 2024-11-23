import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novedad } from '../models/novedad';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {
  apiUrl: String = "http://localhost:80/api/";

  constructor(private _http: HttpClient) { }

  getNovedades(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
    }
    return this._http.get(this.apiUrl + "novedad", httpOptions);
  }

  getNovedadByID(id: string): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
    }
    return this._http.get(this.apiUrl + "novedad/" + id , httpOptions);
  }

  addNovedad(novedad: Novedad): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(novedad);
    return this._http.post(this.apiUrl + "novedad", body, httpOptions);
  }

  editNovedad(novedad: Novedad): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(novedad);
    return this._http.put(this.apiUrl + "novedad/" + novedad._id, body, httpOptions);
  }

  deleteNovedad(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete(this.apiUrl + "novedad/" + id, httpOptions);
  }
}
