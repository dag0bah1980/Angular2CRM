import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
 
import { AuthenticationService } from './services/authentication.service';
import { CookieService } from 'angular2-cookie';

import { Cred } from './auth/class/cred';

@Component({
  selector: 'ang2-crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService ]
})
export class LoginComponent implements OnInit {

  constructor(private _fb: FormBuilder,
        private _router: Router,
        private _authenticationService: AuthenticationService,
        private _cookieService:CookieService) { }

  loginForm: FormGroup;
  model: any = {};
  loading = false;
  error = '';

  ngOnInit() {
    this._authenticationService.logout();
    this.loginForm = this._fb.group({
      'username' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])]
      })
  }

  login() {
        this.loading = true;
        console.log ('Login button clicked');
        this._authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this._router.navigate(['/auth']);
                    console.log ('result is true');
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
        console.log ('username: ' + this.model.username + '|' + 'password: ' + this.model.password);
    }
}
