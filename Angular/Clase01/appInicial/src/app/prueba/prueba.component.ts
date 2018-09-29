import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-prueba',
	templateUrl: './prueba.component.html',
	styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

	fecha: Date = new Date()
	activo: boolean = true

	//listaAlumnos: string[]
	listaAlumnos: Array<string> = [
		"Mónica", "Janet", "Miguel", "Alfredo"
	]

	caracteristicas: {} = {
		peso: 50,
		altura: 180,
		tez: "morena"
	}

	nombre: string

	constructor() {
		/*setInterval(() => {
			this.activo = !this.activo
		}, 1000)*/
		for (var i = 0; i < this.listaAlumnos.length; i++) { }

		this.listaAlumnos.forEach((item, i) => { })

		for (var alumno of this.listaAlumnos) {
			console.log(alumno)
		}

		for (var caracteristica in this.caracteristicas) {
			console.log(caracteristica, this.caracteristicas[caracteristica])
		}
	}

	cambiar() {
		this.activo = !this.activo
	}

	nuevoNombre(valor) {
		this.nombre = valor
		//console.log(valor)
	}

	agregar() {
		this.listaAlumnos.unshift(this.nombre)
	}

	borrar(indice: number) {
		if (confirm("¿Está seguro?")) {
			this.listaAlumnos.splice(indice, 1)
		}
	}



}
