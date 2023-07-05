import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BusquedaComponent } from './vistas/busqueda/busqueda.component';
import { LoginComponent } from './vistas/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MispeliculasComponent } from './vistas/mispeliculas/mispeliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BusquedaComponent,
    LoginComponent,
    HeaderComponent,
    MispeliculasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
