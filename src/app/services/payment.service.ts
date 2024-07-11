import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:3000/';  // URL del backend

  constructor(private http: HttpClient) { }

  createPayment(objetos:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var body = JSON.stringify({
      player_email: "theaxeblue@gmail.com",
      items: objetos,
      back_urls:{
        success: "http://localhost:4200/success",
        cancel: "http://localhost:4200/cancel"
      },
      notification_url: "http://localhost:4200/notification"
    });
    return this.http.post(this.baseUrl+'payment', body, httpOptions);
  }
  
  createSubscription(subscriptionData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl+'subscription', subscriptionData, httpOptions);
  }
}
