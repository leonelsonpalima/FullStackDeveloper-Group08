import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	//BD
	nombre: string
	foto: string

	personas: Array<{ nombre: string, foto: string }> = []
	fotoFile: File
	fotoSeleccionada: any

	constructor() {
		if (localStorage.getItem("personas")) {
			this.personas = JSON.parse(localStorage.getItem("personas"))
		}
	}
	//personas: {nombre: string, foto: string}[]

	//agregar(nombre: string, foto: string) {
	agregar() {
		if (this.nombre.trim() != "" && this.foto.trim() != "") {
			this.personas.push({ nombre: this.nombre, foto: this.foto })
			this.nombre = ""
			this.foto = ""

			localStorage.setItem("personas", JSON.stringify(this.personas))
		}

		//console.log(this.foto.nativeElement.value)


		console.log(this.personas)
	}

	cargarFoto(evento) {
		this.fotoFile = evento.target.files[0]

		let lector: FileReader = new FileReader()
		lector.onload = (e) => {
			this.fotoSeleccionada = e.target["result"]
		}

		lector.readAsDataURL(this.fotoFile)

		//console.log(evento.target.files[0])
	}

}
