import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { SidebarnavComponent } from './sitelayout/sidebarnav.component';
import { HeaderbarComponent } from './sitelayout/headerbar.component';
import { BodydetailComponent } from './sitelayout/bodydetail.component';
import { FooterbarComponent } from './sitelayout/footerbar.component';
import { SubheaderbarComponent } from './sitelayout/subheaderbar.component';

import { routing } from './app.routing';

import { HomeComponent } from './views/home.component';
import { ApiexampleComponent } from './views/apiexample.component';
import { ApinotesComponent } from './views/apinotes.component';
import { CodesnippetsComponent } from './views/codesnippets.component';
import { ProjectComponent } from './views/project.component';
import { ProjectdashboardComponent } from './views/projectdashboard.component';
import { UserComponent } from './views/user.component';
import { UserdashboardComponent } from './views/userdashboard.component';
import { InfoBoxDbSizeComponent } from './widgets/info-box-db-size.component';
import { InfoBoxHddInfoComponent } from './widgets/info-box-hdd-info.component';
import { UdemypracticeComponent } from './views/udemypractice.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarnavComponent,
    HeaderbarComponent,
    BodydetailComponent,
    FooterbarComponent,
    SubheaderbarComponent,
    HomeComponent,
    ApiexampleComponent,
    ApinotesComponent,
    CodesnippetsComponent,
    ProjectComponent,
    ProjectdashboardComponent,
    UserComponent,
    UserdashboardComponent,
    InfoBoxDbSizeComponent,
    InfoBoxHddInfoComponent,
    UdemypracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
