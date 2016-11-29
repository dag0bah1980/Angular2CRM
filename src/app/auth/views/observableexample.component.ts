import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttptestService } from '../services/httptest.service';

import { Test } from '../class/test';

@Component({
  selector: 'ang2-crm-observableexample',
  templateUrl: './observableexample.component.html',
  styleUrls: ['./observableexample.component.css'],
  providers: [HttptestService]
})
export class ObservableexampleComponent implements OnInit {

/* Sample Data
  tests = [
    {
      ID: 123,
      ISACTIVE: true,
      STRVAL32: 'strval',
      INTVAL: 3,
      DATEVAL: '2016-10-22',
      FLTVAL: 1.7,
      CREATED: '2016-10-22T13:47:25.068',
      MODIFIED: '2016-10-22T13:47:25.068'
    }
  ]; 
*/
  tests:Array<Object>;

  finished: boolean = false;
  constructor(private httptestService: HttptestService) { }

  ngOnInit() {
   
  }

  clicked() {
    /*Original To Console
    this.httptestService.getAllTestData().subscribe(
      data => { 
        console.log(data);
      }
    );
    */

    //got the below from the following:
    //http://stackoverflow.com/questions/34671715/angular2-http-get-map-subscribe-and-observable-pattern-basic-understan

    this.httptestService.getAllTestData()
      .subscribe(
        //success
        tests => this.tests = tests,
        //error
        err => this.logError(err),
        //completed
        () => this.finished=true);
    console.log("button clicked");
  }

  logError(err: any) {
    console.log(err);
  }

}
