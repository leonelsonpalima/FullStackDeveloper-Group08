import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponent } from './mio.component';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
	declarations: [
		AppComponent,
		MiComponent,
		PruebaComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [MiComponent]
})
export class AppModule { }
