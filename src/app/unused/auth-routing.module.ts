import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const authroutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(authroutes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule { }
