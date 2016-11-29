import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

import { SidebarnavComponent } from './sitelayout/sidebarnav.component';
import { HeaderbarComponent } from './sitelayout/headerbar.component';
import { BodydetailComponent } from './sitelayout/bodydetail.component';
import { FooterbarComponent } from './sitelayout/footerbar.component';
import { SubheaderbarComponent } from './sitelayout/subheaderbar.component';

import { authrouting } from './auth.routing';

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
import { CreateprojectComponent } from './views/createproject.component';
import { EditprojectComponent } from './views/editproject.component';
import { TiersdashboardComponent } from './views/tiersdashboard.component';
import { CreatetierComponent } from './views/createtier.component';
import { EdittierComponent } from './views/edittier.component';
import { DeletetierComponent } from './views/deletetier.component';
import { ListtiersComponent } from './views/listtiers.component';
import { CreatetagComponent } from './views/createtag.component';
import { EdittagComponent } from './views/edittag.component';
import { DeletetagComponent } from './views/deletetag.component';
import { ListtagsComponent } from './views/listtags.component';
import { TagdashboardComponent } from './views/tagdashboard.component';
import { AuthComponent } from './auth.component';

import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { ObservableexampleComponent } from './views/observableexample.component';

@NgModule({
  declarations: [
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
    UdemypracticeComponent,
    CreateprojectComponent,
    EditprojectComponent,
    TiersdashboardComponent,
    CreatetierComponent,
    EdittierComponent,
    DeletetierComponent,
    ListtiersComponent,
    CreatetagComponent,
    EdittagComponent,
    DeletetagComponent,
    ListtagsComponent,
    TagdashboardComponent,
    AuthComponent,
    ObservableexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    authrouting
  ],
  providers: [ AuthGuard, AuthService ]
})
export class AuthModule { }
