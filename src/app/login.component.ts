import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import {Http, Response, Request, RequestMethod} from '@angular/http';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'ang2-crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted: boolean = false;
  authenticated: boolean;  //value: undefined
  user = {
    login: 'admin',
    password: 'test123'
  };
  profile: Object;

  constructor(private _fb: FormBuilder, private _router: Router, public http: Http, public authService: AuthService) {

  }

  ngOnInit() {
      this.loginForm = this._fb.group({
      'login' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])]
      })
  }

  redirectHome() {
    this._router.navigate(['/auth']);
  }

  isAuthenticated(value):boolean {
    let login = value.login;
    let password = value.password;




    if (login === this.user.login && password === this.user.password) {
      this.authenticated = true;
      this.authService.login();
      return true;
    } else {
      return false;
    }
  }

  submitForm(value: any) {
    this.submitted = true;  //Test that submitted works

    //If the authentication works, let's redirect to the homepage
    if (this.isAuthenticated(value)) { 
      this.redirectHome();  
    } else {
      this.authenticated = false;
    };

    //See what happens when submit is pressed
    console.log(value);
    console.log('submitted: ' + this.submitted);
    console.log('authenticated: ' + this.authenticated);

  }
}