import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(private _http: HttpClient) { }

  generateBase64(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '6c0ff18e0fmshd6ae84187f7137dp1e4372jsn3f3d33e0d011',
        'X-RapidAPI-Host': 'qr-code-generator153.p.rapidapi.com'
      })
    }
    return this._http.get('https://qr-code-generator153.p.rapidapi.com/QR_Code?data=' + url, httpOptions);
  }
}
