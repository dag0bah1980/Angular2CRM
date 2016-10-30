import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ang2-crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup;

constructor(fb: FormBuilder){
    this.loginForm = fb.group({
      'login' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])]
    })
}

  submitForm(value: any){
    console.log(value);
  }
}