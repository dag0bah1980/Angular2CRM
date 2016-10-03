import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home.component';
import { UserComponent } from "./views/user.component";
import { UserdashboardComponent } from "./views/userdashboard.component";
import { ProjectComponent } from "./views/project.component";
import { ProjectdashboardComponent } from "./views/projectdashboard.component";
import { UdemypracticeComponent } from "./views/udemypractice.component";
import { ApiexampleComponent } from "./views/apiexample.component";
import { ApinotesComponent } from "./views/apinotes.component";
import { CodesnippetsComponent } from './views/codesnippets.component';
import { CreateprojectComponent } from './views/createproject.component';


const APP_ROUTES: Routes =[
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'userdashboard', component: UserdashboardComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'projectdashboard', component: ProjectdashboardComponent },
    { path: 'udemypractice', component: UdemypracticeComponent },
    { path: 'apiexample', component: ApiexampleComponent },
    { path: 'apinotes', component: ApinotesComponent },
    { path: 'codesnippets', component: CodesnippetsComponent },
    { path: 'createproject', component: CreateprojectComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);