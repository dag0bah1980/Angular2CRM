import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie';

import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthModule } from './auth/auth.module';

import { LoginComponent } from './login.component';

import { AlertModule, ModalModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { DataTableModule } from "angular2-datatable";
import { AdminlteComponent } from './adminlte.component';
import { CalendarModule, CheckboxModule, InputTextModule, InputTextareaModule,
EditorModule, DropdownModule} from 'primeng/primeng'; 
import { MaterialModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminlteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule,
    ModalModule,
    TooltipModule,
    TypeaheadModule,
    ChartsModule,
    DataTableModule,
    CheckboxModule,
    MaterialModule,
    routing
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
