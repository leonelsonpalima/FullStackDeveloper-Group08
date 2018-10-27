import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  fecha = new Date()

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.autenticacionService.onCambioEstado
    .subscribe
  }

}
