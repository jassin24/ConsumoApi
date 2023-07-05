import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required)
  })
  errorStatus: boolean = false;
  errormje: any = "";

  constructor(private api:ApiService, private router:Router){}

  Login(form: any) {
    this.api.login(form).subscribe(data => {
        console.log(data);
        if (data.status == "OK") {
            localStorage.setItem("token", data.result);
            this.router.navigate(['busqueda']);
        } else {
            this.errorStatus = true;
            this.errormje = data.result;
        }
    })
}

}
