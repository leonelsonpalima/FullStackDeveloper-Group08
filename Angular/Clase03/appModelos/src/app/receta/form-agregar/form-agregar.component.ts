import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-form-agregar',
	templateUrl: './form-agregar.component.html',
	styleUrls: ['./form-agregar.component.css']
})
export class FormAgregarComponent implements OnInit {
	@Output() onAgregando: EventEmitter<any> = new EventEmitter<any>()

	titulo: string
	descripcion: string
	ingredientes: string
	instrucciones: string
	foto: string

	constructor() { }

	ngOnInit() {
	}

	agregar() {
		const datos = {
			titulo: this.titulo,
			descripcion: this.descripcion,
			ingredientes: this.ingredientes,
			instrucciones: this.instrucciones,
			foto: this.foto
		}

		this.onAgregando.emit(datos)
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
