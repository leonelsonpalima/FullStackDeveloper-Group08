import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from "../autenticacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }

  ingresar(){
    this.autenticacionService.login()
  }

}
