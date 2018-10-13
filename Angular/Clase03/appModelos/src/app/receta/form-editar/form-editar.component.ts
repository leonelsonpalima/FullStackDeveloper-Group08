import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecetaService } from '../../servicios/receta.service';

@Component({
	selector: 'app-form-editar',
	templateUrl: './form-editar.component.html',
	styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent implements OnInit {

	recetaEditando: {} = {}
	@Input() indice: number
	/*@Input("edicion") recetaEditando: {}
	@Output() onActualizando: EventEmitter<{}> = new EventEmitter<{}>()
	@Output() onCancelando: EventEmitter<any> = new EventEmitter()*/

	constructor(private recetaService: RecetaService) {
		this.recetaEditando = this.recetaService.detallar(this.indice)
	}

	ngOnInit() {
	}

	guardar() {
		//this.onActualizando.emit(this.recetaEditando)
	}

	cancelar() {
		//this.onCancelando.emit()
	}

}
