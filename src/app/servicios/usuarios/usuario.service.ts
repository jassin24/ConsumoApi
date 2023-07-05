import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  backend = "http://127.0.0.1:8000/api/"

  constructor(private http: HttpClient) { }

  getFavoritos(): Observable<any> {
    let direccion = this.backend + "favoritos";
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ` + this.getToken()
    })
    return this.http.get<any>(direccion, {headers : header});
  }
  
  getToken() {
    return "" + localStorage.getItem('token');
  }
}
