import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecetaService } from '../../servicios/receta.service';
import { IReceta } from '../../modelos/receta.interface';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	recetas: Array<IReceta>

	constructor(private recetaService: RecetaService) { }

	ngOnInit() {
		this.recetas = this.recetaService.listar()
	}

	eliminar(indice: number) {
		if (confirm("¿Está seguro?")) {
			this.recetaService.eliminar(indice)
		}
	}

	editar(indice) {
		this.recetaService.onEditando.emit(indice)
	}

}
