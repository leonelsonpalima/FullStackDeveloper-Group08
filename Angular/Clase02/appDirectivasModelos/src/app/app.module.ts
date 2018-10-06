import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertaOk } from './alerta-ok.component';
import { AlertaMal } from './alerta-mal.component';
import { FormsModule } from "@angular/forms"

@NgModule({
	declarations: [
		AppComponent,
		AlertaOk,
		AlertaMal
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
