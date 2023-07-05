import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PeliculaI } from 'src/app/modelos/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://www.omdbapi.com/?apikey=62faf260&"
  backend = "http://127.0.0.1:8000/api/"

  constructor(private http: HttpClient) { }
  
  getbusqueda(tipo:string): Observable<any> {
    let direccion = this.url + 's='+tipo;
    return this.http.get<any>(direccion);
  }
  
  getbuscar(tipo:string): Observable<any> {
    let direccion = this.url + 'i='+tipo;
    return this.http.get<any>(direccion);
  }

  login(form: any): Observable<any> {
    let direccion = this.backend + "login";
    return this.http.post<any>(direccion, form);
  }

  logout(): Observable<any> {
    let direccion = this.backend + "usuario/logout";
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ` + this.getToken()
    })
    return this.http.get<any>(direccion, {headers : header});
  }

  isloget():boolean{
    if (localStorage.getItem('token')!='') {
      return true;      
    }else{
      return false;
    }
  }

  postfavorito(pel:PeliculaI):Observable<any>{
    let direccion = this.backend + "usuarios/favoritos";
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+ this.getToken()
    })
    return this.http.post<any>(direccion, pel, {headers : header})
  }

  getToken() {
    return "" + localStorage.getItem('token');
  }
}
