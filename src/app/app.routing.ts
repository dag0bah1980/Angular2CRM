import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { UserdashboardComponent } from "./userdashboard/userdashboard.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectdashboardComponent } from "./projectdashboard/projectdashboard.component";

const APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'userdashboard', component: UserdashboardComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'projectdashboard', component: ProjectdashboardComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

