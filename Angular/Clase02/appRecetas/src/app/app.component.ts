import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	recetas: Array<{ titulo: string, descripcion: string, palabrasClave, foto: string }>

	titulo: string
	descripcion: string
	foto: string
	palabrasClave: string

	constructor() {
		this.recetas = this.leerLS()
	}

	agregar() {
		if (!this.recetas) this.recetas = []

		const titulo = this.titulo
		const descripcion = this.descripcion
		const palabrasClave = this.palabrasClave
		const foto = this.foto

		if (titulo != "" && descripcion != "" && foto != "" && palabrasClave != "") {
			this.recetas.push({ titulo, descripcion, palabrasClave, foto })
			this.titulo = ""
			this.descripcion = ""
			this.foto = ""
			this.palabrasClave = ""
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

	leerLS(): Array<{ titulo: string, descripcion: string, palabrasClave, foto: string }> {
		if (localStorage.getItem("recetas")) {
			return JSON.parse(localStorage.getItem("recetas"))
		}
		return []
	}
}
