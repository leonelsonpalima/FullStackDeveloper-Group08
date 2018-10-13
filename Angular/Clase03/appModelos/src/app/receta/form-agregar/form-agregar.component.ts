import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecetaService } from '../../servicios/receta.service';

@Component({
	selector: 'app-form-agregar',
	templateUrl: './form-agregar.component.html',
	styleUrls: ['./form-agregar.component.css']
})
export class FormAgregarComponent implements OnInit {
	titulo: string
	descripcion: string
	ingredientes: string
	instrucciones: string
	foto: string

	constructor(private recetaService: RecetaService) { }

	ngOnInit() {
	}

	agregar() {
		/*const datos = {
			titulo: this.titulo,
			descripcion: this.descripcion,
			ingredientes: this.ingredientes,
			instrucciones: this.instrucciones,
			foto: this.foto
		}*/

		this.recetaService.agregar(this.titulo, this.descripcion, this.ingredientes, this.instrucciones, this.foto)
		//this.onAgregando.emit(datos)
		this.reset()
	}


	reset() {
		this.titulo = ""
		this.descripcion = ""
		this.ingredientes = ""
		this.instrucciones = ""
		this.foto = ""
	}

}
