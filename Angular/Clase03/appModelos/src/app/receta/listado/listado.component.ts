import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input("listaRecetas") recetas: Array<any>
	@Output() onEliminando: EventEmitter<number> = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {

	}

	eliminar(indice: number) {
		if (confirm("¿Está seguro?")) {
			this.onEliminando.emit(indice)
		}
	}

}
