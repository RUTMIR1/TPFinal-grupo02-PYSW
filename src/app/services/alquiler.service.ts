import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  apiUrl: String = "http://localhost:3000/api/";
  constructor(private _http: HttpClient) { }
  

  getAlquileres(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
    }
    return this._http.get(this.apiUrl + "alquiler", httpOptions);
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

  editAlquiler(alquiler: Alquiler): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(alquiler);
    return this._http.put(this.apiUrl + "/alquiler/" + alquiler._id, body, httpOptions);
  }
}
