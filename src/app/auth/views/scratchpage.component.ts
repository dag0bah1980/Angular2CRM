import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { DateTimeLiveServiceService } from '../services/date-time-live-service.service';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'ang2-crm-scratchpage',
  templateUrl: './scratchpage.component.html',
  styleUrls: ['./scratchpage.component.css'],
  providers: [DateTimeLiveServiceService]
})
export class ScratchpageComponent implements OnInit {

  constructor(private _fb: FormBuilder, private dateTimeService: DateTimeLiveServiceService,) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      'username' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])]
    });

    Observable.interval(3000).subscribe(x => {
      this.getTime();
    });
    
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


  currentDateTime: Date;

  getTime(): void {
    //this.currentDateTime = this.dateTimeService.getDateTime();
    //this.dateTimeService.getDateTime2().then(currentDateTime => this.currentDateTime = currentDateTime);
    this.dateTimeService.getDateTimeSlowly().then(currentDateTime => this.currentDateTime = currentDateTime);
  }


}
