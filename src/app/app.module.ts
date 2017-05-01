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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    routing
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
