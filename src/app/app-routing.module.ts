import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './vistas/busqueda/busqueda.component';
import { LoginComponent } from './vistas/login/login.component';
import { MispeliculasComponent } from './vistas/mispeliculas/mispeliculas.component';

const routes: Routes = [
  { path : '', redirectTo : 'busqueda', pathMatch: 'full'},
  { path : 'busqueda', component:BusquedaComponent},
  { path : 'login', component:LoginComponent},
  { path : 'mispeliculas', component:MispeliculasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
