import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { FormAgregarComponent } from './receta/form-agregar/form-agregar.component';
import { ListadoComponent } from './receta/listado/listado.component';
import { FormEditarComponent } from './receta/form-editar/form-editar.component'
import { RecetaService } from './servicios/receta.service';
import { LogService } from './servicios/log.service';

@NgModule({
	declarations: [
		AppComponent,
		FormAgregarComponent,
		ListadoComponent,
		FormEditarComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		RecetaService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
