import { Component } from '@angular/core';
import { PeliculaI } from 'src/app/modelos/pelicula.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  busqueda:string = '';
  login:boolean = false;
  pelicula! : PeliculaI;
  lspeliculas: any[] = [];

  constructor(private api:ApiService){
    this.pelicula = {
      Poster : '',
      Title : '',
      Actors : '',
      Year : '',
      Director : ''
    }
    this.login = api.isloget()
  }

  buscar(){
    this.api.getbusqueda(this.busqueda).subscribe(data => {
      this.lspeliculas = data.Search
    })
  }
  
  detalles(item:string){
    this.api.getbuscar(item).subscribe(data => {
      console.log(data)
      this.pelicula = {
        imdbID : data.imdbID,
        Title : data.Title,
        Year : data.Year,
        Actors : data.Actors,
        Poster : data.Poster,
        Director : data.Director
      }
    })
  }

  agregar(pel:PeliculaI){
    console.log(pel)
    this.api.postfavorito(pel).subscribe(data => {
      if (data.status=='OK') {
        alert('Se Registro correctamente');
      }
    })
  }

  agregarbus(item:string){    
    this.api.getbuscar(item).subscribe(data => {
      console.log(data)
      this.api.postfavorito(data).subscribe(data => {
        if (data.status=='OK') {
          alert('Se Registro correctamente');
        }
      })
    })
  }
}
