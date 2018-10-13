import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { FormAgregarComponent } from './receta/form-agregar/form-agregar.component';
import { ListadoComponent } from './receta/listado/listado.component';
import { FormEditarComponent } from './receta/form-editar/form-editar.component'

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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
