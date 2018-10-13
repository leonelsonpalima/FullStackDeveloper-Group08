export class Receta {
	recetas: Array<{
		titulo: string
		descripcion: string
		ingredientes: string
		instrucciones: string
		foto: string
	}> = []

	agregar(titulo: string, descripcion: string, ingredientes: string, instrucciones: string, foto: string) {
		this.recetas.push({ titulo, descripcion, ingredientes, instrucciones, foto })
	}

	listar(): Array<any> {
		return this.recetas
	}

	detallar(indice: number): any {
		return Object.assign({}, this.recetas[indice])
	}

	eliminar(indice: number) {
		this.recetas.splice(indice, 1)
	}

	actualizar(indice, receta) {
		this.recetas[indice] = receta
	}
}
