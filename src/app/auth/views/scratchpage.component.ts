import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ang2-crm-scratchpage',
  templateUrl: './scratchpage.component.html',
  styleUrls: ['./scratchpage.component.css']
})
export class ScratchpageComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      'username' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])]
      })
  }

  addOverlayDivBox = true;

  disableDiv(string){
    console.log(string);
    this.addOverlayDivBox ? this.addOverlayDivBox = false : this.addOverlayDivBox = true;
  }

  loginForm: FormGroup;
  toggleSubmit=false;
  lockLogin = false;
  submitFormClean(value: any) {
      console.log('SubmitFormClean clicked!' + value);
      this.toggleSubmit=true;
      this.lockLogin ? this.lockLogin = false : this.lockLogin = true;
  }

  @ViewChild('childModal') public childModal:ModalDirective;
 
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

}
