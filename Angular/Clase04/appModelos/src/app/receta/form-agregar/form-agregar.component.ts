import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecetaService } from '../../servicios/receta.service';
import { IReceta } from '../../modelos/receta.interface';

@Component({
	selector: 'app-form-agregar',
	templateUrl: './form-agregar.component.html',
	styleUrls: ['./form-agregar.component.css']
})
export class FormAgregarComponent {
	receta: IReceta = {}

	constructor(private recetaService: RecetaService) { }

	agregar() {
		this.recetaService.agregar(this.receta)
		this.reset()
	}

	reset() {
		this.receta = {}
	}

}
