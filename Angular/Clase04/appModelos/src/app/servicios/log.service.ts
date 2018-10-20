import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class LogService {
	log(mensaje) {
		console.log(`%c ${mensaje}`, 'color: red')
	}
}