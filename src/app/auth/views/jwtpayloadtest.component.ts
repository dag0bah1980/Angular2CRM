import { Component, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie';

import { HttpService } from '../../auth/services/http.service';

import { Http, Response, Request, RequestMethod, Headers } from '@angular/http';


@Component({
  selector: 'ang2-crm-jwtpayloadtest',
  templateUrl: './jwtpayloadtest.component.html',
  styleUrls: ['./jwtpayloadtest.component.css'],
  providers: [HttpService]
})
export class JwtpayloadtestComponent implements OnInit {

  constructor(private _cookieService:CookieService, public http: Http ) { }

  currentUserName: string;
  currentCookieTest: string;
  currentJWTToken: string;
  currentAppVersion: string;
  currentHeaderPayloadSignature: string;

  ngOnInit() {
    this.currentUserName = this._cookieService.get('USER');
    this.currentCookieTest = this._cookieService.get('cookietest');
    this.currentJWTToken = this._cookieService.get('token');
    this.currentAppVersion = this._cookieService.get('appversion');
  }

   payload = {
    foo: 'bar'
  };



  sendJWTAPICall() {
      const body = JSON.stringify(this.payload);
      let postheaders = new Headers();
      
      postheaders.append('Content-Type', 'application/json');
      postheaders.append('Authorization', 'Basic ' + btoa(this.currentJWTToken));
      return this.http.post('http://lorico.redirectme.net:8888/auth/foo', body, { headers: postheaders })
      .map((data: Response) => data.json());
  }

  tryJWTPost() {

    //From Async undefined issues: http://stackoverflow.com/questions/41709346/angular-2-local-variable-is-undefined-outside-method    
    this.sendJWTAPICall().subscribe(
      data => { 
          console.log('success');
      },
      error => { 
        console.log('Error: ' + <any>error);
        
      },
      () => {}
    );   
  } 
}
