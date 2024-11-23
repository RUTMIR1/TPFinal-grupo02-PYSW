import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  apiUrl: String;
  constructor(private _http: HttpClient) { 
    this.apiUrl  = "http://localhost:80/api/";
  }
  

  getAlquileres(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
    }
    return this._http.get(this.apiUrl+"alquiler", httpOptions);
  }

  addAlquiler(alquiler: Alquiler): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(alquiler);
    return this._http.post(this.apiUrl + "alquiler", body, httpOptions);
  }

  editAlquiler(alquiler: Alquiler, id:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(alquiler);
    return this._http.put(this.apiUrl + "alquiler/" + id, body, httpOptions);
  }

  getAlquilerById(id: string):Observable<any>{
    const httpOptions = {}
    return this._http.get(this.apiUrl + "alquiler/" + id, httpOptions);
  }

  deleteAlquiler(id: string): Observable<any>{
    const httpOptions = {}
    return this._http.delete(this.apiUrl + "alquiler/" + id, httpOptions);
  }

  getAlquileresByUser(id: string):Observable<any>{
    const httpOptions = {};
    return this._http.get(this.apiUrl + 'alquiler/usuario/'+id, httpOptions);
  }
}
