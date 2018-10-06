import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	recetas: Array<{ titulo: string, descripcion: string, palabrasClave, foto: string }>

	@ViewChild("titulo") titulo: ElementRef
	@ViewChild("descripcion") descripcion: ElementRef
	@ViewChild("foto") foto: ElementRef
	@ViewChild("palabrasClave") palabrasClave: ElementRef

	constructor() {
		this.recetas = this.leerLS()
	}

	agregar() {
		if (!this.recetas) this.recetas = []

		const titulo = this.titulo.nativeElement.value.trim()
		const descripcion = this.descripcion.nativeElement.value.trim()
		const palabrasClave = this.palabrasClave.nativeElement.value.trim()
		const foto = this.foto.nativeElement.value.trim()

		if (titulo != "" && descripcion != "" && foto != "" && palabrasClave != "") {
			this.recetas.push({ titulo, descripcion, palabrasClave, foto })
			this.titulo.nativeElement.value = ""
			this.descripcion.nativeElement.value = ""
			this.foto.nativeElement.value = ""
			this.palabrasClave.nativeElement.value = ""
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
