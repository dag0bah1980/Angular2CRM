import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import 'rxjs/Rx';

import { SidebarnavComponent } from './sitelayout/sidebarnav.component';
import { HeaderbarComponent } from './sitelayout/headerbar.component';
import { BodydetailComponent } from './sitelayout/bodydetail.component';
import { FooterbarComponent } from './sitelayout/footerbar.component';
import { SubheaderbarComponent } from './sitelayout/subheaderbar.component';
import { ParentoutletComponent } from './sitelayout/parentoutlet.component';
import { RootleveloutletComponent } from './sitelayout/rootleveloutlet.component';

import { BreadcrumbsComponent } from './sitelayout/breadcrumbs/breadcrumbs.component';

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

//Services
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { AuthenticationService } from '../services/authentication.service';

//Data Services
import { CurrentusersService } from './services/data/currentusers.service';
import { TagsService } from './services/data/tags.service';
import { StatusesService } from './services/data/statuses.service';
import { CarService } from './services/data/cars.service';

//Pipe
import { DataMgmtIsActiveFilterPipe }   from './pipes/data-mgmt-is-active-filter.pipe';
import { DataMgmtIsDeletedFilterPipe }   from './pipes/data-mgmt-is-deleted-filter.pipe';
import { DataMgmtFilterPipe }   from './pipes/data-mgmt-filter.pipe';
import { TimedatePipe }   from './pipes/timedate.pipe';

//Callouts
import { DataMgmtSubmitComponent } from './callouts/data-mgmt-submit/data-mgmt-submit.component';

import { ObservableexampleComponent } from './views/observableexample.component';
import { ClientComponent } from './views/client.component';

import { ActivestatuslabelComponent } from './widgets/activestatuslabel/activestatuslabel.component';
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
import { ErrorMessageComponent } from './modals/error-message/error-message.component';

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
import { JwttestComponent } from './views/jwttest.component';
import { UpgradenotesComponent } from './views/upgradenotes.component';
import { NeedtocreatelinkComponent } from './views/needtocreatelink.component';
import { CookietestComponent } from './views/cookietest.component';
import { CookieContentsComponent } from './modals/cookie-contents/cookie-contents.component';
import { JwtpayloadtestComponent } from './views/jwtpayloadtest.component';
import { ScratchpageComponent } from './views/scratchpage.component';
import { SecuritygroupsComponent } from './views/securitygroups.component';
import { SecuritygroupsdashboardComponent } from './views/securitygroupsdashboard.component';
import { HelpScreenComponent } from './modals/help-screen/help-screen.component';
import { AreYouSureComponent } from './modals/are-you-sure/are-you-sure.component';
import { BackendcontrolsComponent } from './views/backendcontrols.component';

import { ProgrammingpracticeComponent } from './views/programmingpractice.component';
import { ApitreeComponent } from './views/apitree.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule, ModalModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';

import { ChartsModule } from 'ng2-charts';
import { DataTableModule } from "angular2-datatable";

import { CKEditorModule } from 'ng2-ckeditor';

import { CalendarModule, CheckboxModule, InputTextModule, InputTextareaModule,
EditorModule, DropdownModule, OverlayPanelModule, FileUploadModule, GrowlModule, Message, 
DataTableModule as PrimeNGDataTableModule, TooltipModule as PrimeNGTooltipModule, SplitButtonModule, DialogModule} from 'primeng/primeng';  

import {MdDialogModule} from '@angular/material';

import { SharedModule } from "primeng/components/common/shared";
import { AuthRendererDirective } from './directives/auth-renderer.directive';
import { MaincontentcontainerComponent } from './sitelayout/maincontentcontainer.component';

// Header Bar Widgets
import { TasksbuttonComponent } from './sitelayout/headerbarwidgets/tasksbutton/tasksbutton.component';
import { TimebuttonComponent } from './sitelayout/headerbarwidgets/timebutton/timebutton.component';
import { NotificationsbuttonComponent } from './sitelayout/headerbarwidgets/notificationsbutton/notificationsbutton.component';
import { CallbacksbuttonComponent } from './sitelayout/headerbarwidgets/callbacksbutton/callbacksbutton.component';
import { AppointmentsbuttonComponent } from './sitelayout/headerbarwidgets/appointmentsbutton/appointmentsbutton.component';
import { BookmarksbuttonComponent } from './sitelayout/headerbarwidgets/bookmarksbutton/bookmarksbutton.component';
import { MessagesbuttonComponent } from './sitelayout/headerbarwidgets/messagesbutton/messagesbutton.component';
import { ProfilebuttonComponent } from './sitelayout/headerbarwidgets/profilebutton/profilebutton.component';
import { DatamgmtmenuComponent } from './views/rootmenus/datamgmtmenu.component';
import { StyleguideComponent } from './views/styleguide.component';

import { EditstatusComponent } from './views/editstatus.component';
import { ListstatusesComponent } from './views/liststatuses.component';
import { CreatestatusComponent } from './views/createstatus.component';
import { StatusesdashboardComponent } from './views/statusesdashboard.component';
import { CreatetaskComponent } from './views/createtask.component';
import { CreateuserComponent } from './views/createuser.component';
import { ListusersComponent } from './views/listusers.component';
import { UserprofilelabelComponent } from './widgets/userprofilelabel/userprofilelabel.component';
import { DialogOverviewExampleDialogComponent } from './widgets/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { UserprofilelabeldialogComponent } from './widgets/userprofilelabel/userprofilelabeldialog.component';
import { SeveritydropdownwidgetComponent } from './widgets/severitydropdownwidget/severitydropdownwidget.component';
import { PrioritydropdownwidgetComponent } from './widgets/prioritydropdownwidget/prioritydropdownwidget.component';
import { ProjecttypedropdownwidgetComponent } from './widgets/projecttypedropdownwidget/projecttypedropdownwidget.component';
import { ProjectvotewidgetComponent } from './widgets/projectvotewidget/projectvotewidget.component';
import { RecurringprojectwidgetComponent } from './widgets/recurringprojectwidget/recurringprojectwidget.component';
import { DueinwidgetComponent } from './widgets/dueinwidget/dueinwidget.component';
import { StatuswidgetComponent } from './widgets/statuswidget/statuswidget.component';
import { MytasksComponent } from './views/mytasks.component';
import { TexttoellipsesPipe } from './pipes/texttoellipses.pipe';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    SidebarnavComponent,
    HeaderbarComponent,
    BodydetailComponent,
    FooterbarComponent,
    SubheaderbarComponent,
    ParentoutletComponent,
    RootleveloutletComponent,
    BreadcrumbsComponent,
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
    AboutthissoftwareComponent,
    JwttestComponent,
    UpgradenotesComponent,
    NeedtocreatelinkComponent,
    CookietestComponent,
    CookieContentsComponent,
    JwtpayloadtestComponent,
    ScratchpageComponent,
    HelpScreenComponent,
    AreYouSureComponent,
    SecuritygroupsComponent,
    SecuritygroupsdashboardComponent,
    BackendcontrolsComponent,
    ProgrammingpracticeComponent,
    ApitreeComponent,
    DataMgmtIsActiveFilterPipe,
    DataMgmtIsDeletedFilterPipe,
    DataMgmtFilterPipe,
    ActivestatuslabelComponent,
    TimedatePipe,
    ErrorMessageComponent,
    DataMgmtSubmitComponent,
    AuthRendererDirective,
    MaincontentcontainerComponent,
    TasksbuttonComponent,
    TimebuttonComponent,
    NotificationsbuttonComponent,
    CallbacksbuttonComponent,
    AppointmentsbuttonComponent,
    BookmarksbuttonComponent,
    MessagesbuttonComponent,
    ProfilebuttonComponent,
    DatamgmtmenuComponent,
    StyleguideComponent,
    EditstatusComponent,
    ListstatusesComponent,
    CreatestatusComponent,
    StatusesdashboardComponent,
    CreatetaskComponent,
    CreateuserComponent,
    ListusersComponent,
    UserprofilelabelComponent,
    DialogOverviewExampleDialogComponent,
    UserprofilelabeldialogComponent,
    SeveritydropdownwidgetComponent,
    PrioritydropdownwidgetComponent,
    ProjecttypedropdownwidgetComponent,
    ProjectvotewidgetComponent,
    RecurringprojectwidgetComponent,
    DueinwidgetComponent,
    StatuswidgetComponent,
    MytasksComponent,
    TexttoellipsesPipe
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    UserprofilelabeldialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    authrouting,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    ChartsModule,
    DataTableModule,
    CKEditorModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    EditorModule,
    DropdownModule,
    SharedModule,
    MdDialogModule,
    FileUploadModule,
    GrowlModule,
    PrimeNGDataTableModule,
    PrimeNGTooltipModule,
    SplitButtonModule,
    DialogModule
  ],
  providers: [ 
    AuthGuard, 
    AuthService,
    { 
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [HttpModule, RequestOptions] 
    },
    AuthenticationService,
    CurrentusersService,
    TagsService,
    StatusesService,
    CarService
  ]
  
})
export class AuthModule { }

