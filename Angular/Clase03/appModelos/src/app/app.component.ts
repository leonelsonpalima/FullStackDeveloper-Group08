import { Component, OnInit } from '@angular/core';
import { Receta } from './modelos/receta';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	titulo: string
	descripcion: string
	ingredientes: string
	instrucciones: string
	foto: string

	receta: Receta = new Receta()

	recetas: Receta[]

	recetaEditando: Receta
	indiceRecetaEditando: number

	ngOnInit() {
		this.recetas = this.receta.listar()
	}

	agregar() {
		this.receta.agregar(this.titulo, this.descripcion, this.ingredientes, this.instrucciones, this.foto)

		this.reset()
	}

	eliminar(indice: number) {
		if (confirm("¿Está seguro?")) {
			this.receta.eliminar(indice)
		}
	}

	editar(indice) {
		this.indiceRecetaEditando = indice
		this.recetaEditando = this.receta.detallar(indice)
	}

	guardar() {
		this.receta.actualizar(this.indiceRecetaEditando, this.recetaEditando)
		this.recetaEditando = undefined
	}

	reset() {
		this.titulo = ""
		this.descripcion = ""
		this.ingredientes = ""
		this.instrucciones = ""
		this.foto = ""
	}
}
