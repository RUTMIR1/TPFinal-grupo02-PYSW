import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http:HttpClient){}
  login(user: string, pass: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify({
      username: user,
      password: pass
    });
    return this._http.post('http://localhost:3000/api/usuario/' + 'login', body, httpOptions);
  }

  logout() {
    //borro el vble almacenado mediante el storage
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("perfil");
    sessionStorage.removeItem("userid");
  }
  userLoggedIn(){
    var resultado = false;
    var usuario = sessionStorage.getItem("user");
    if(usuario!=null){
    resultado = true;
    }
    return resultado;
    }

    userLogged(){
      var usuario = sessionStorage.getItem("user");
      return usuario;
      }

     idLogged(){
      var id = sessionStorage.getItem("userid");
      return id;
      }
}
