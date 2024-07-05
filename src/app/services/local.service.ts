import { Injectable } from '@angular/core';
import { Local } from '../models/local';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  arrayLocales: Local[] = [];

  constructor(private _http: HttpClient) { }

  //GET ARRAY LOCALES
  public getLocales():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
  return this._http.get('http://localhost:3000/api/local', httpOptions);
  }




  // ADD (AGREGAR LOCAL)
  public add(producto: Local):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

  let body:any = JSON.stringify(producto);
  console.log(body);
  return this._http.post('http://localhost:3000/api/local',body, httpOptions);
  }



   // UPDATE
   public update(l: Local):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

  let body:any = JSON.stringify(l);
  return this._http.put('http://localhost:3000/api/local/'+l._id,body, httpOptions);
  }

  // DELETE DE LOCAL
  deleteLocal(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete('http://localhost:3000/api/local/'+id, httpOptions);
  }


  // FIND BY ID DE LOCAL
  getLocalById(id: string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get('http://localhost:3000/api/local/'+id, httpOptions);
  }






}
