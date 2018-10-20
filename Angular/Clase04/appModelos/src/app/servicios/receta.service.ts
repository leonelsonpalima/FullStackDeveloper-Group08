import { EventEmitter, Injectable } from "@angular/core";
import { IReceta } from "../modelos/receta.interface";
import { LogService } from "./log.service";

@Injectable()
export class RecetaService {
	onEditando: EventEmitter<any> = new EventEmitter<any>()

	private recetas: Array<IReceta> = []

	constructor(private logService: LogService) { }

	agregar(receta: IReceta) {
		this.recetas.push(receta)
	}

	listar(): Array<IReceta> {
		this.logService.log("Listado generado desde el servicio")
		return this.recetas
	}

	detallar(indice: number): IReceta {
		return Object.assign({}, this.recetas[indice])
	}

	eliminar(indice: number) {
		this.recetas.splice(indice, 1)
	}

	actualizar(indice, receta) {
		this.recetas[indice] = receta
		this.onEditando.emit()
	}
}