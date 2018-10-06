import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	//BD

	@ViewChild("foto") foto: ElementRef
	@ViewChild("nombre") nombre: ElementRef

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
		const nombre = this.nombre.nativeElement.value
		const foto = this.foto.nativeElement.value

		if (nombre.trim() != "" && foto.trim() != "") {
			this.personas.push({ nombre, foto })
			this.nombre.nativeElement.value = ""
			this.foto.nativeElement.value = ""

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
