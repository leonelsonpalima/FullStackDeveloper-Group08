import { Component, OnInit } from '@angular/core';
import { Receta } from './modelos/receta';
import { RecetaService } from './servicios/receta.service';

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

	editando: boolean = false

	constructor(private recetaService: RecetaService) {
		this.recetaService.onEditando.subscribe(
			(respuesta) => {
				if (respuesta || respuesta == 0) {
					this.indiceRecetaEditando = respuesta
					this.editando = true
				} else this.editando = false
			}
		)
	}

	ngOnInit() {
		this.recetas = this.receta.listar()
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
