import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  login: boolean = false;
  constructor(private api:ApiService){
    this.login = api.isloget();
  }
  ngOnInit(): void {
    
  }
}
