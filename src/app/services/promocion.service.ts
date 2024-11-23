import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocion } from '../models/promocion';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {
  apiUrl: String = "http://localhost:80/api/";

  constructor(private _http: HttpClient) { }

  getPromociones(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
    }
    
    return this._http.get(this.apiUrl + "promocion", httpOptions);
  }

  addPromocion(promocion: Promocion): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(promocion);
    return this._http.post(this.apiUrl + "promocion", body, httpOptions);
  }


  editPromocion(promocion: Promocion): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(promocion);
    return this._http.put(this.apiUrl + "promocion/" + promocion._id, body, httpOptions);
  }

  deletePromocion(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete(this.apiUrl + "promocion/" + id, httpOptions);
  }
}
