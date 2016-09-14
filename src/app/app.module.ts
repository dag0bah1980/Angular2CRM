import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.Component';
import { SidebarnavComponent } from './sidebarnav';
import { HeaderbarComponent } from './headerbar';
import { BodydetailComponent } from './bodydetail';
import { FooterbarComponent } from './footerbar';

import { routing } from './app.routing';

@NgModule({
    declarations: [AppComponent,SidebarnavComponent, HeaderbarComponent, BodydetailComponent, FooterbarComponent],
    imports: [BrowserModule, routing, HttpModule],
    bootstrap: [AppComponent]
})

export class AppModule { }