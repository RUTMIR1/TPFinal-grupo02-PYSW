import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlUser: string='http://localhost:3000/api/usuario'

  constructor(private http:HttpClient) { 
  }

  public getUser():Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({})
    }
    return this.http.get(this.urlUser,httpOptions)
  }

  public deleteUser(id:string):Observable<any>{
    const httpOptions={
    }
    return this.http.delete(this.urlUser+'/'+id,httpOptions);
   }

   public byUser (id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
      })
    }
    return this.http.get(this.urlUser+'/'+id,httpOptions);
   }

   public putUser(user: Usuario):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    let body= JSON.stringify(user)
    return this.http.put(this.urlUser+'/'+user._id,body,httpOptions);
  }

  public postUser(user: Usuario):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    let body= JSON.stringify(user)
    return this.http.post(this.urlUser,body,httpOptions);
  }

  public getUsersByPerfil(perfil:string): Observable<any>{
    const httpOptions={
    }
    return this.http.get(this.urlUser+ '/tipo?perfil=' + perfil,httpOptions);
  }
}
