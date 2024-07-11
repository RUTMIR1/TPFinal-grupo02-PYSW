import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  
  private baseUrl = 'http://localhost:3000/api/pago/';  // URL del backend

  constructor(private http: HttpClient) { }

  getPagos(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.baseUrl,httpOptions);
  }

  createPago(pago: Pago): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(pago);
    return this.http.post(this.baseUrl, body, httpOptions);
  }

  getPago(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.baseUrl+id,httpOptions);
  }
}
