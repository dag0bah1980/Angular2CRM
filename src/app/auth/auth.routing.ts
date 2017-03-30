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

import { ServicedashboardComponent  } from './views/servicedashboard.component';
import { InventorydashboardComponent  } from './views/inventorydashboard.component';
import { ContractdashboardComponent  } from './views/contractdashboard.component';
import { DiscountdashboardComponent  } from './views/discountdashboard.component';
import { CampaigndashboardComponent  } from './views/campaigndashboard.component';
import { PaymenttypedashboardComponent  } from './views/paymenttypedashboard.component';
import { SupportticketdashboardComponent  } from './views/supportticketdashboard.component';
import { ClienttypedashboardComponent  } from './views/clienttypedashboard.component';
import { SystembackupComponent } from './views/systembackup.component';
import { CurrentusersComponent } from './views/currentusers.component';
import { AboutthissoftwareComponent } from './views/aboutthissoftware.component';

import { UpgradenotesComponent } from './views/upgradenotes.component';
import { CookietestComponent } from './views/cookietest.component';
import { NeedtocreatelinkComponent } from './views/needtocreatelink.component';

import { JwttestComponent } from './views/jwttest.component';
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
                { path: 'platformsdashboard', component: PlatformsdashboardComponent },
                { path: 'servicedashboard', component: ServicedashboardComponent },
                { path: 'inventorydashboard', component: InventorydashboardComponent },
                { path: 'contractdashboard', component: ContractdashboardComponent },
                { path: 'discountdashboard', component: DiscountdashboardComponent },
                { path: 'campaigndashboard', component: CampaigndashboardComponent },
                { path: 'paymenttypedashboard', component: PaymenttypedashboardComponent },
                { path: 'supportticketdashboard', component: SupportticketdashboardComponent },
                { path: 'clienttypedashboard', component: ClienttypedashboardComponent },
                { path: 'systembackup', component: SystembackupComponent },
                { path: 'currentusers', component: CurrentusersComponent },
                { path: 'aboutthissoftware', component: AboutthissoftwareComponent },                
                { path: 'jwttest', component: JwttestComponent },
                { path: 'upgradenotes', component: UpgradenotesComponent },
                { path: 'cookietest', component: CookietestComponent },
                { path: 'needtocreatlink', component: NeedtocreatelinkComponent }
                
            ] }
    
];

export const authrouting = RouterModule.forChild(AUTH_ROUTES);