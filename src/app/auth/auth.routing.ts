import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home.component';

import { UserdashboardComponent } from "./views/userdashboard.component";
import { CreateuserComponent } from './views/createuser.component';
import { ListusersComponent } from './views/listusers.component';

import { ProjectComponent } from "./views/project.component";
import { ProjectdashboardComponent } from "./views/projectdashboard.component";
import { UdemypracticeComponent } from "./views/udemypractice.component";
import { ApiexampleComponent } from "./views/apiexample.component";
import { ApinotesComponent } from "./views/apinotes.component";
import { CodesnippetsComponent } from './views/codesnippets.component';
import { CreateprojectComponent } from './views/createproject.component';
import { EditprojectComponent } from './views/editproject.component';


import { CreatetaskComponent } from './views/createtask.component';

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

import { StatusesdashboardComponent } from './views/statusesdashboard.component';
import { ListstatusesComponent } from './views/liststatuses.component';
import { CreatestatusComponent } from './views/createstatus.component';

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

import { SecuritygroupsComponent } from './views/securitygroups.component';
import { SecuritygroupsdashboardComponent } from './views/securitygroupsdashboard.component';

import { BackendcontrolsComponent } from './views/backendcontrols.component';

import { ProgrammingpracticeComponent } from './views/programmingpractice.component';
import { StyleguideComponent } from './views/styleguide.component';
import { ApitreeComponent } from './views/apitree.component';

import { JwttestComponent } from './views/jwttest.component';
import { JwtpayloadtestComponent } from './views/jwtpayloadtest.component';

import { ScratchpageComponent } from './views/scratchpage.component';

import { AuthComponent } from './auth.component';

import { AuthGuard } from '../services/auth-guard.service';


import { DatamgmtmenuComponent } from './views/rootmenus/datamgmtmenu.component';


const AUTH_ROUTES: Routes =[
    {   path: 'auth', 
        component: AuthComponent,
        canActivate: [ AuthGuard ],
            children: [
                { path: '', redirectTo: 'home', pathMatch: 'full'  },
                { path: 'home', component: HomeComponent, pathMatch: 'full' },    
                { path: 'styleguide', component: StyleguideComponent,
                    data: {
                        breadcrumb: "Style Guide"
                    },
                },            
                { path: 'project', component: ProjectComponent },
                { path: 'projectdashboard', component: ProjectdashboardComponent },
                { path: 'createproject', component: CreateprojectComponent },
                { path: 'editproject', component: EditprojectComponent },     
                { path: 'listprojects', component: ListprojectsComponent }, 
                { path: 'createtask', component: CreatetaskComponent },
                { path: 'programmingpractice', component: ProgrammingpracticeComponent, 
                    data: {
                        breadcrumb: "Programming Practice"
                    }, 
                    children: 
                    [
                        { path: 'apitree', component: ApitreeComponent,
                            data: {
                                breadcrumb: "API Tree"
                            }, 
                            children: 
                            [
                                { path: 'apiexample', component: ApiexampleComponent,
                                    data: {
                                        breadcrumb: "API Example"
                                    },
                                },
                            { path: 'apinotes', component: ApinotesComponent,
                                data: {
                                    breadcrumb: "API Notes"
                                },
                            },  
                            ]
                        }, 
                        { path: 'udemypracticetree', component: ApitreeComponent, 
                            data: 
                            {
                                breadcrumb: "Udemy Practice Tree"
                            }, 
                            children: 
                            [
                                { path: 'udemypractice', component: UdemypracticeComponent,
                                    data: {
                                        breadcrumb: "Udemy Practice"
                                    }
                                },                
                            ]
                        },    
                    ] 
                },
                { path: 'platformsdashboard', component: PlatformsdashboardComponent },                
                { path: 'codesnippets', component: CodesnippetsComponent },                      
                { path: 'observableexample', component: ObservableexampleComponent },
                { path: 'client', component: ClientComponent },                
                { path: 'systembackup', component: SystembackupComponent },
                { path: 'currentusers', component: CurrentusersComponent },
                { path: 'aboutthissoftware', component: AboutthissoftwareComponent },                
                { path: 'jwttest', component: JwttestComponent },
                { path: 'upgradenotes', component: UpgradenotesComponent, canActivate: [AuthGuard],
                    data: {
                        breadcrumb: "Upgrade Notes"
                    }
                },
                { path: 'cookietest', component: CookietestComponent },
                { path: 'jwtpayloadtest', component: JwtpayloadtestComponent}, 
                { path: 'scratchpage', component: ScratchpageComponent}, 
                { path: 'needtocreatelink', component: NeedtocreatelinkComponent, canActivate: [AuthGuard] },
                { path: 'backendcontrols', component: BackendcontrolsComponent },
                { path: 'datamgmtmenu', component: DatamgmtmenuComponent,
                    data: {
                        breadcrumb: "Data Management Menu"
                    },
                    children: [
                        { path: 'userdashboard', component: UserdashboardComponent,
                            data: {
                                breadcrumb: "Users Dashboard"
                            }, 
                            children: [ 
                            ] 
                        },
                        { path: 'createuser', component: CreateuserComponent,
                            data: {
                                breadcrumb: "Create a User"
                            }
                        },
                        { path: 'listusers', component: ListusersComponent, 
                            data: {
                                breadcrumb: "List of Users"
                            }
                        },
                        { path: 'securitygroupsdashboard', component: SecuritygroupsdashboardComponent },                                
                        { path: 'securitygroups', component: SecuritygroupsComponent },                        
                        { path: 'servicedashboard', component: ServicedashboardComponent },

                        
                        { path: 'inventorydashboard', component: InventorydashboardComponent },
                        { path: 'contractdashboard', component: ContractdashboardComponent },
                        { path: 'discountdashboard', component: DiscountdashboardComponent },
                        { path: 'campaigndashboard', component: CampaigndashboardComponent },
                        { path: 'paymenttypedashboard', component: PaymenttypedashboardComponent },
                        { path: 'supportticketdashboard', component: SupportticketdashboardComponent },
                        { path: 'clienttypedashboard', component: ClienttypedashboardComponent },
                        { path: 'statusesdashboard', component: StatusesdashboardComponent, 
                            data: {
                                breadcrumb: "Statuses Dashboard"
                            },
                            children: 
                            [                                
                            ] 
                        },
                        { path: 'createstatus', component: CreatestatusComponent,
                            data: {
                                breadcrumb: "Create a Status"
                            }
                        },
                        { path: 'liststatuses', component: ListstatusesComponent, 
                            data: {
                                breadcrumb: "List of Statuses"
                            }
                        },
                        { path: 'tiersdashboard', component: TiersdashboardComponent, 
                            data: {
                                breadcrumb: "Tiers Dashboard"
                            },
                            children: 
                            [                                
                            ] 
                        },
                        { path: 'createtier', component: CreatetierComponent,
                            data: {
                                breadcrumb: "Create a Tier"
                            }
                        },
                        { path: 'listtiers', component: ListtiersComponent, 
                            data: {
                                breadcrumb: "List of Tiers"
                            }
                        },
                        { path: 'tagdashboard', component: TagdashboardComponent,
                            data: {
                                breadcrumb: "Tags Dashboard"
                            }, 
                            children:
                            [                                
                            ]
                        },                        
                        { path: 'createtag', component: CreatetagComponent,
                            data: {
                                breadcrumb: "Create a Tag"
                            } 
                        },
                        { path: 'listtags', component: ListtagsComponent,
                            data: {
                                breadcrumb: "List of Tags"
                            }
                        },
                    ]
                },                
            ] }
            
];

export const authrouting = RouterModule.forChild(AUTH_ROUTES);