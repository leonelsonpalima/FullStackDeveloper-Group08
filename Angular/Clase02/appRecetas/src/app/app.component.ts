import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	recetas: Array<{ titulo: string, descripcion: string, palabrasClave, foto: string, rating: number, revisiones: number }>

	titulo: string
	descripcion: string
	foto: string
	palabrasClave: string
	rating: number
	revisiones: number

	constructor() {
		this.recetas = this.leerLS()
	}

	agregar() {
		if (!this.recetas) this.recetas = []

		const titulo = this.titulo
		const descripcion = this.descripcion
		const palabrasClave = this.palabrasClave
		const foto = this.foto
		const rating = this.rating
		const revisiones = this.revisiones

		if (titulo != "" && descripcion != "" && foto != "" && palabrasClave != "") {
			this.recetas.push({ titulo, descripcion, palabrasClave, foto, rating, revisiones })
			this.titulo = ""
			this.descripcion = ""
			this.foto = ""
			this.palabrasClave = ""
			this.rating = 0
			this.revisiones = 0
			this.escribirLS()
		}
	}

	eliminar(indice) {
		if (confirm("¿Está seguro?")) {
			this.recetas.splice(indice, 1)
			this.escribirLS()
		}
	}

	escribirLS() {
		localStorage.setItem("recetas", JSON.stringify(this.recetas))
	}

	leerLS(): Array<{ titulo: string, descripcion: string, palabrasClave, foto: string, rating: number, revisiones: number }> {
		if (localStorage.getItem("recetas")) {
			return JSON.parse(localStorage.getItem("recetas"))
		}
		return []
	}

	obtenerColorLetra(receta) {
		return receta.rating > 3 ? 'blue' : 'purple'
	}

	aplicaClaseInclinada(receta) {
		return receta.revisiones > 10 ? true : false
	}

	aplicaClaseNormal(receta) {
		return receta.revisiones <= 10 ? true : false
	}

	ngDoCheck() {
		console.log("Algo pasó")
	}
}
