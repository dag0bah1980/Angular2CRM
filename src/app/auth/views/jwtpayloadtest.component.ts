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
      
      //Originally: postheaders.append('Authorization', 'Basic ' + btoa(this.currentJWTToken));
      // This needs to use the Bearer schema...
      postheaders.append('Authorization', 'Bearer ' + this.currentJWTToken);
      
      //For some reason I didn't need any of the below appends!!!!
      //postheaders.append('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Origin, Authorization');
      //postheaders.append('Access-Control-Allow-Origin', '*');
      //postheaders.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      //postheaders.append('Authorization', 'Basic ' + btoa(this.currentJWTToken));
      //postheaders.append('body', '');
      console.log(postheaders);

      return this.http.post('http://lorico.redirectme.net:8888/auth/foo', body, { headers: postheaders })
      .map((data: Response) => {console.log(data); data.json(); }, error => { console.log('ERROR' + <any>error.json())});
  }

  tryJWTPost() {
    console.log('clicked tryJWTPost()... please wait');
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

  validateJWT() {
    console.log('clicked');
  }
}
