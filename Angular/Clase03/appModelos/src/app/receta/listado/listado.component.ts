import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecetaService } from '../../servicios/receta.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	//@Input("listaRecetas") recetas: Array<any>
	recetas: Array<any>
	//@Output() onEliminando: EventEmitter<number> = new EventEmitter<number>()
	//@Output() onEditando: EventEmitter<number> = new EventEmitter<number>()


	constructor(private recetaService: RecetaService) { }

	ngOnInit() {
		this.recetas = this.recetaService.listar()
	}

	eliminar(indice: number) {
		if (confirm("¿Está seguro?")) {
			//this.onEliminando.emit(indice)
			this.recetaService.eliminar(indice)
		}
	}

	editar(indice) {
		this.recetaService.onEditando.emit(indice)
		//this.onEditando.emit(indice)
	}

}
