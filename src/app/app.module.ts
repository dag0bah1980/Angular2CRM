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
import { InfoBoxDatabaseSizeComponent } from './widgets/info-box-database-size';
import { InfoBoxHddInfoComponent } from './widgets/info-box-hdd-info';
import { CodesnippetsComponent } from './codesnippets';

import { routing } from './app.routing';

@NgModule({
    declarations: [AppComponent, HomeComponent, SidebarnavComponent, 
    HeaderbarComponent, BodydetailComponent, FooterbarComponent, 
    SubheaderbarComponent, UserComponent, UserdashboardComponent,
    ProjectComponent, ProjectdashboardComponent, UdemypracticeComponent,
    ApiexampleComponent, ApinotesComponent,InfoBoxDatabaseSizeComponent,
    InfoBoxHddInfoComponent, CodesnippetsComponent],
    imports: [BrowserModule, routing, HttpModule],
    bootstrap: [AppComponent]
})

export class AppModule { }