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
import { ClientComponent } from './views/client.component';
import { ClientaddresstabsComponent } from './widgets/clientaddresstabs.component';
import { ClientsalestabsComponent } from './widgets/clientsalestabs.component';
import { ClientcontractstabComponent } from './widgets/clientcontractstab.component';
import { ClientcontractsexpiredtabComponent } from './widgets/clientcontractsexpiredtab.component';

import { ClientlicensestabComponent } from './widgets/clientlicensestab.component';
import { ClientpeopletabComponent } from './widgets/clientpeopletab.component';
import { ClientactivitytabComponent } from './widgets/clientactivitytab.component';
import { ClientsoftwaretabComponent } from './widgets/clientsoftwaretab.component';
import { ClientsupporttabsComponent } from './widgets/clientsupporttabs.component';
import { ClientsupportticketsComponent } from './widgets/clientsupporttickets.component';
import { ClientaddressformComponent } from './widgets/clientaddressform.component';
import { ClientpointsofcontactheaderComponent } from './widgets/clientpointsofcontactheader.component';
import { ClientinfoheaderComponent } from './widgets/clientinfoheader.component';
import { ClientstatsheaderComponent } from './widgets/clientstatsheader.component';
import { ClienteducationtabComponent } from './widgets/clienteducationtab.component';
import { ClientactionbuttonsComponent } from './widgets/clientactionbuttons.component';
import { ClientshippingformComponent } from './widgets/clientshippingform.component';
import { ProjectCRUDbuttonsComponent } from './widgets/project-crudbuttons.component';
import { ListprojectsComponent } from './views/listprojects.component';
import { ProjectListviewComponent } from './widgets/project-listview/project-listview.component';
import { CreateTaskQuickComponent } from './modals/create-task-quick/create-task-quick.component';
import { CreateCallbackComponent } from './modals/create-callback/create-callback.component';
import { QuickSaleComponent } from './modals/quick-sale/quick-sale.component';
import { SalesinfoheaderComponent } from './widgets/salesinfoheader/salesinfoheader.component';
import { SalesclientinfoheaderComponent } from './widgets/salesclientinfoheader/salesclientinfoheader.component';
import { SalesheadertabComponent } from './widgets/salesheadertab/salesheadertab.component';
import { SaveLinkComponent } from './modals/save-link/save-link.component';
import { PlatformsdashboardComponent } from './views/platformsdashboard.component';
import { ServicedashboardComponent } from './views/servicedashboard.component';
import { InventorydashboardComponent } from './views/inventorydashboard.component';
import { ContractdashboardComponent } from './views/contractdashboard.component';
import { DiscountdashboardComponent } from './views/discountdashboard.component';
import { CampaigndashboardComponent } from './views/campaigndashboard.component';
import { PaymenttypedashboardComponent } from './views/paymenttypedashboard.component';
import { SupportticketdashboardComponent } from './views/supportticketdashboard.component';
import { ClienttypedashboardComponent } from './views/clienttypedashboard.component';
import { SystembackupComponent } from './views/systembackup.component';
import { CurrentusersComponent } from './views/currentusers.component';
import { AboutthissoftwareComponent } from './views/aboutthissoftware.component';

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
    ObservableexampleComponent,
    ClientComponent,
    ClientaddresstabsComponent,
    ClientsalestabsComponent,
    ClientcontractstabComponent,
    ClientcontractsexpiredtabComponent,
    ClientlicensestabComponent,
    ClientlicensestabComponent,
    ClientpeopletabComponent,
    ClientactivitytabComponent,
    ClientsoftwaretabComponent,
    ClientsupporttabsComponent,
    ClientsupportticketsComponent,
    ClientaddressformComponent,
    ClientpointsofcontactheaderComponent,
    ClientinfoheaderComponent,
    ClientstatsheaderComponent,
    ClienteducationtabComponent,
    ClientactionbuttonsComponent,
    ClientshippingformComponent,
    ProjectCRUDbuttonsComponent,
    ListprojectsComponent,
    ProjectListviewComponent,
    CreateTaskQuickComponent,
    CreateCallbackComponent,
    QuickSaleComponent,
    SalesinfoheaderComponent,
    SalesclientinfoheaderComponent,
    SalesheadertabComponent,
    SaveLinkComponent,
    PlatformsdashboardComponent,
    ServicedashboardComponent,
    InventorydashboardComponent,
    ContractdashboardComponent,
    DiscountdashboardComponent,
    CampaigndashboardComponent,
    PaymenttypedashboardComponent,
    SupportticketdashboardComponent,
    ClienttypedashboardComponent,
    SystembackupComponent,
    CurrentusersComponent,
    AboutthissoftwareComponent
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
