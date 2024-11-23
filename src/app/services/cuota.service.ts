import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuota } from '../models/cuota';

@Injectable({
  providedIn: 'root'
})
export class CuotaService{

  BaseUrl:string;
  constructor(private _http:HttpClient){ 
    this.BaseUrl = 'http://localhost:80/api/cuota/'
  }

   getCuotas():Observable<any> {
    const httpOptions = {};
    return this._http.get(this.BaseUrl, httpOptions);
  }

  createCuota(cuota:Cuota):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(cuota);
    return this._http.post(this.BaseUrl, body, httpOptions);
  }

  deleteCuota(id:string):Observable<any>{
    const httpOptions = {};
    return this._http.delete(this.BaseUrl+id, httpOptions);
  }

  updateCuota(cuota:Cuota, id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(cuota);
    return this._http.put(this.BaseUrl+id, body, httpOptions);
  }
}