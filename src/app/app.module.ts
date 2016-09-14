import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent } from './app.Component';
import { HomeComponent } from './home';
import { SidebarnavComponent } from './sidebarnav';
import { HeaderbarComponent } from './headerbar';
import { BodydetailComponent } from './bodydetail';
import { FooterbarComponent } from './footerbar';
import { SubheaderbarComponent } from './subheaderbar';
import { UserComponent } from './user';
import { UserdashboardComponent } from './userdashboard';
import { ProjectComponent } from './project';
import { ProjectdashboardComponent } from './projectdashboard';
import { UdemypracticeComponent } from './udemypractice';
import { ApiexampleComponent } from './apiexample';
import { ApinotesComponent } from './apinotes';

import { routing } from './app.routing';

@NgModule({
    declarations: [AppComponent, HomeComponent, SidebarnavComponent, 
    HeaderbarComponent, BodydetailComponent, FooterbarComponent, 
    SubheaderbarComponent, UserComponent, UserdashboardComponent,
    ProjectComponent, ProjectdashboardComponent, UdemypracticeComponent,
    ApiexampleComponent, ApinotesComponent],
    imports: [BrowserModule, routing, HttpModule],
    bootstrap: [AppComponent]
})

export class AppModule { }