import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import {Http, Response, Request, RequestMethod} from '@angular/http';

import { AuthService } from './services/auth.service';

import { HttpService } from './auth/services/http.service';

import { Cred } from './auth/class/cred';

@Component({
  selector: 'ang2-crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted: boolean = false;
  authenticated: boolean;  //value: undefined
  user = {
    username: 'admin',
    password: 'test123'
  };
  profile: Object;
  test: boolean = false;

  constructor(private _fb: FormBuilder, private _router: Router, public http: Http, public authService: AuthService, private httpService: HttpService) {

  }

  errorMessage: string;

  ngOnInit() {
      this.loginForm = this._fb.group({
      'username' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])]
      })
  }

  redirectHome() {
    this._router.navigate(['/auth']);
  }

  
  isAuthenticated(value):boolean {
    let username = value.username;
    let password = value.password;
 
    //Need to figure out how this can be made so that the request completes before continuing.
    //Right now, it works after two submits because the first one completes it's search
    this.httpService.sendCredentials(value)
      .subscribe(
        //case sensitive?
         data => {
           console.log('From Service' + data.Data[0].SUCCESS);
           this.test = data.Data[0].SUCCESS;
          },
         //data => console.log(data),
         error => this.errorMessage = <any>error,
         () => {
           console.log('Complete');
           
         }
      );

      console.log('Test: ' + this.test);
    if (this.test==true) {
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
      this.authenticated=true; 
      this.redirectHome();  
    } else {
      this.authenticated = false;
    };
    
    //See what happens when submit is pressed
   // console.log(value);
    console.log('submitted: ' + this.submitted);
    console.log('authenticated: ' + this.authenticated);

  }
}