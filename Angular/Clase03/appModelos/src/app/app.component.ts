import { Component } from '@angular/core';
import { Receta } from './modelos/receta';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	titulo: string
	descripcion: string
	ingredientes: string
	instrucciones: string
	foto: string

	recetas: Receta[] = []

	agregar() {
		const objReceta: Receta = new Receta(this.titulo, this.descripcion, this.ingredientes, this.instrucciones, this.foto)

		this.recetas.push(objReceta)
		console.log(this.recetas)
	}
}
