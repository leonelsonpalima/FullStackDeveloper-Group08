import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-form-editar',
	templateUrl: './form-editar.component.html',
	styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent implements OnInit {

	@Input("edicion") recetaEditando: {}
	@Output() onActualizando: EventEmitter<{}> = new EventEmitter<{}>()
	@Output() onCancelando: EventEmitter<any> = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	guardar() {
		this.onActualizando.emit(this.recetaEditando)
	}

	cancelar() {
		this.onCancelando.emit()
	}

}
