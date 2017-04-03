import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import {Http, Response, Request, RequestMethod, Headers} from '@angular/http';

import { AuthService } from './services/auth.service';
import { AuthenticateService } from './services/authenticate.service';
import { AuthenticaterService } from './services/authenticater.service';

import { HttpService } from './auth/services/http.service';

import {Observable} from 'rxjs/Rx';

import { Cred } from './auth/class/cred';

import { CookieService } from 'angular2-cookie';



@Component({
  selector: 'ang2-crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService, AuthenticateService, AuthenticaterService ]
})
export class LoginComponent implements OnInit {

  finished: boolean = false;
  loginForm: FormGroup;
  submitted: boolean = false;
  authenticated: boolean;  //value: undefined
  user = {
    username: 'admin',
    password: 'test123'
  };
  profile: Object;
  test: boolean = false;

  constructor(private _fb: FormBuilder, private _router: Router, public http: Http, 
              public authService: AuthService, private httpService: HttpService, 
              private authenticateService: AuthenticateService, 
              private authenticaterService: AuthenticaterService,
              private _cookieService:CookieService) {

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
           console.log('From Service: ' + data.Data[0].SUCCESS);
           this.test = data.Data[0].SUCCESS;
          },
         //data => console.log(data),
         error => this.errorMessage = <any>error,
         () =>  this.finished=true
      );

      console.log('Test: ' + this.test);
    if (this.test==true) {
      this.authService.login();
      this.authenticated=true;
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

  submitFormClean(value: any) {
      console.log('SubmitFormClean clicked!');
      //console.log('checkAuthenticated authenticated: ' + this.authenticated);
      //console.log('checkAuthenticated errormessage: ' + this.errorMessage);

      
      this.validateCredentials(value);
      
      //console.log('checkAuthenticated authenticated: ' + this.authenticated);
      //console.log('checkAuthenticated errormessage: ' + this.errorMessage);

      if (this.authenticated){
         //console.log('In If');

      }
  }

  validateBoolean: boolean;

  sendCredentials(cred: any) {
    const body = JSON.stringify(cred);
    
    this._cookieService.put('USER', cred.username);
    const postheaders = new Headers;
    postheaders.append('Content-Type', 'application/json');
    return this.http.post('http://lorico.redirectme.net:8888/auth/login', body, {
      headers: postheaders
    })
      .map((data: Response) => data.json());
  }

  validateCredentials(value: any) {

    //From Async undefined issues: http://stackoverflow.com/questions/41709346/angular-2-local-variable-is-undefined-outside-method    
    this.sendCredentials(value).subscribe(
      data => { 
        console.log('Successful login?: ' + data.Data[0].SUCCESS );
        this.validateBoolean = data.Data[0].SUCCESS;
        this.authenticated = data.Data[0].SUCCESS; 
        if (this.authenticated == true) {
          this.authService.login();

          this._cookieService.put('cookietest','cookievalue');
          this._cookieService.put('token',  data.Meta.jwttoken);
          this._cookieService.put('appversion', data.Meta.appversion)
          this.redirectHome();
        } else {
          this._cookieService.remove('USER');
        }
      },
      error => { 
        console.log('Error: ' + <any>error);
        this.validateBoolean = false;
        this.authenticated = false;
        this._cookieService.remove('USER');
      },
      () => {}
    );    
    
  }
  
}
