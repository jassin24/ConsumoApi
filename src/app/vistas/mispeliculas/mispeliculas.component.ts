import { Component } from '@angular/core';

@Component({
  selector: 'app-mispeliculas',
  templateUrl: './mispeliculas.component.html',
  styleUrls: ['./mispeliculas.component.css']
})
export class MispeliculasComponent {
  busqueda:string = '';
  login:boolean = false;
  lspeliculas: any[] = [];

  buscar(){
    // this.api.getbusqueda(this.busqueda).subscribe(data => {
    //   this.lspeliculas = data.Search
    // })
  }
  
  detalles(item:string){
    // this.api.getbuscar(item).subscribe(data => {
    //   console.log(data)
    //   this.pelicula = {
    //     imdbID : data.imdbID,
    //     Title : data.Title,
    //     Year : data.Year,
    //     Actors : data.Actors,
    //     Poster : data.Poster,
    //     Director : data.Director
    //   }
    // })
  }

  remover(id:string){
    // this.api.postfavorito(pel).subscribe(data => {
    //   if (data.status=='OK') {
    //     alert('Se Registro correctamente');
    //   }
    // })
  }
}
