import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { RecetaService } from '../../servicios/receta.service';
import { IReceta } from '../../modelos/receta.interface';

@Component({
	selector: 'app-form-editar',
	templateUrl: './form-editar.component.html',
	styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent {

	recetaEditando: IReceta = {}
	@Input() indice: number

	constructor(private recetaService: RecetaService) {

	}

	ngOnChanges(cambios: SimpleChange) {
		this.recetaEditando = this.recetaService.detallar(cambios["indice"].currentValue)
	}

	guardar() {
		this.recetaService.actualizar(this.indice, this.recetaEditando)
	}

	cancelar() {
		this.recetaService.onEditando.emit()
	}

}
