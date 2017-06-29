import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, ModalModule, TypeaheadModule } from 'ngx-bootstrap';

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

  public ckeditorContent: string;
  onChange() { }
  onReady() { }
  onFocus() { }
  onBlur() {}
  
  constructor(private _fb: FormBuilder, private dateTimeService: DateTimeLiveServiceService,) { 
    this.ckeditorContent = '<p>My HTML</p>';
  }

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

  public selected:string;
  public states:string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
    'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico',
    'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];

  clicked() {
    console.log('clicked');
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  
}
