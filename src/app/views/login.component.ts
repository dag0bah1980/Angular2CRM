import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ang2-crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  authenticated: boolean;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
      this.loginForm = this._fb.group({
      'login' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])]
      })
  }

  submitForm(value: any) {
    if (value.login === 'admin' && value.password === 'test123') {
      this.authenticated = true;
    };
    console.log(value);
    console.log(this.authenticated);
  }
}