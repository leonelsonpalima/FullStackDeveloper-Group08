import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  onCambioEstado: Subject<boolean> = new Subject<boolean>

  constructor() { }

  login(){

    this.onCambioEstado.next(true)

  }

}
