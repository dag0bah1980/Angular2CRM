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
import { EditprojectComponent } from './views/editproject.component';

import { TiersdashboardComponent } from './views/tiersdashboard.component';
import { CreatetierComponent } from './views/createtier.component';
import { DeletetierComponent } from './views/deletetier.component';
import { EdittierComponent } from './views/edittier.component';
import { ListtiersComponent } from './views/listtiers.component';

import { TagdashboardComponent } from './views/tagdashboard.component';
import { CreatetagComponent } from './views/createtag.component';
import { DeletetagComponent } from './views/deletetag.component';
import { EdittagComponent } from './views/edittag.component';
import { ListtagsComponent } from './views/listtags.component';
import { ClientComponent } from './views/client.component';

import { ListprojectsComponent } from './views/listprojects.component';

import { ObservableexampleComponent } from './views/observableexample.component';

import { PlatformsdashboardComponent  } from './views/platformsdashboard.component';

import { AuthComponent } from './auth.component';

import { AuthGuard } from '../services/auth-guard.service';


const AUTH_ROUTES: Routes =[
    {   path: 'auth', 
        component: AuthComponent,
        canActivate: [ AuthGuard ],
            children: [
                { path: '', component: HomeComponent },
                { path: 'home', component: HomeComponent },
                { path: 'user', component: UserComponent },
                { path: 'userdashboard', component: UserdashboardComponent },
                { path: 'project', component: ProjectComponent },
                { path: 'projectdashboard', component: ProjectdashboardComponent },
                { path: 'udemypractice', component: UdemypracticeComponent },
                { path: 'apiexample', component: ApiexampleComponent },
                { path: 'apinotes', component: ApinotesComponent },
                { path: 'codesnippets', component: CodesnippetsComponent },
                { path: 'createproject', component: CreateprojectComponent },
                { path: 'editproject', component: EditprojectComponent },
                { path: 'tiersdashboard', component: TiersdashboardComponent },
                { path: 'createtier', component: CreatetierComponent },
                { path: 'deletetier', component: DeletetierComponent },
                { path: 'edittier', component: EdittierComponent },
                { path: 'listtiers', component: ListtiersComponent },
                { path: 'tagdashboard', component: TagdashboardComponent },
                { path: 'createtag', component: CreatetagComponent },
                { path: 'deletetag/:id', component: DeletetagComponent },
                { path: 'edittag/:id', component: EdittagComponent },
                { path: 'listtags', component: ListtagsComponent },
                { path: 'observableexample', component: ObservableexampleComponent },
                { path: 'client', component: ClientComponent },
                { path: 'listprojects', component: ListprojectsComponent },
                { path: 'platformsdashboard', component: PlatformsdashboardComponent }
            ] }
    
];

export const authrouting = RouterModule.forChild(AUTH_ROUTES);