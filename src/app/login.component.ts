import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
 
import { AuthenticationService } from './services/authentication.service';
import { CookieService } from 'angular2-cookie';

import { Cred } from './auth/class/cred';

import { SelectItem } from 'primeng/primeng';

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
  valid = false;

  ngOnInit() {
    this._authenticationService.logoutnouser();
    this.loginForm = this._fb.group({
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      'RememberMe': [null]
      })
  }

  // Function to find out if a control is valid AND pristine
  checkValidAndPristine(controlValue: string) {
    if (!this.loginForm.controls[controlValue].valid && !this.loginForm.controls[controlValue].pristine) {
      return true;
    } else {
      return false;
    }
  }

  login() {
        this.loading = true;
        console.log ('Login button clicked');
        this._authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
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
        console.log ('username: ' + this.loginForm.value.username + '|' + 'password: ' + this.loginForm.value.password);
    }
}
