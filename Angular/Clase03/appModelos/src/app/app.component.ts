import { Component, OnInit } from '@angular/core';
import { Receta } from './modelos/receta';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


	receta: Receta = new Receta()

	recetas: Receta[]

	recetaEditando: Receta
	indiceRecetaEditando: number

	ngOnInit() {
		this.recetas = this.receta.listar()
	}

	agregar(recetaItem) {
		this.receta.agregar(recetaItem.titulo, recetaItem.descripcion, recetaItem.ingredientes, recetaItem.instrucciones, recetaItem.foto)
	}

	eliminar(indice: number) {
		this.receta.eliminar(indice)
	}

	editar(indice) {
		this.indiceRecetaEditando = indice
		this.recetaEditando = this.receta.detallar(indice)
	}

	guardar(recetaActualizada) {
		this.receta.actualizar(this.indiceRecetaEditando, recetaActualizada)
		this.recetaEditando = undefined
	}

	cancelar(evento) {
		console.log(evento)
		this.recetaEditando = undefined
	}

}
