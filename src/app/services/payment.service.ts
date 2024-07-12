import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:3000/';  // URL del backend

  constructor(private http: HttpClient) { }

  createPayment(objeto:Item): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var body = JSON.stringify({
      "additional_info": "Discount 12.00",
      "auto_return": "approved",
      "back_urls": {
        "success": "http://test.com/success",
        "pending": "http://test.com/pending",
        "failure": "http://test.com/failure"
      },
      "differential_pricing": {
        "id": 1
      },
      "expires": false,
      "items": [objeto],
      "marketplace": "NONE",
      "marketplace_fee": 0,
      "metadata": null,
      "notification_url": "http://notificationurl.com",
      "payer": {
        "name": "Milton",
        "surname": "Delgado",
        "email": "theaxeblue@gmail.com",
        "phone": {
          "area_code": "11",
          "number": 988888888
        },
        "identification": {
          "type": "CPF",
          "number": "19119119100"
        },
        "address": {
          "zip_code": "06233200",
          "street_name": "Example Street",
          "street_number": 123
        },
        "date_created": "2024-04-01T00:00:00Z"
      },
      "payment_methods": {
        "excluded_payment_methods": [
          {
            "id": "master"
          }
        ],
        "excluded_payment_types": [
          {
            "id": "ticket"
          }
        ],
        "default_payment_method_id": "amex",
        "installments": 10,
        "default_installments": 5
      }
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
