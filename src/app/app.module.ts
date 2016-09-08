import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.Component';
import { routing } from './app.routing';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,routing, HttpModule],
    bootstrap: [AppComponent]
})

export class AppModule { }