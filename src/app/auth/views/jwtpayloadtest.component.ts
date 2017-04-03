import { Component, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie';


@Component({
  selector: 'ang2-crm-jwtpayloadtest',
  templateUrl: './jwtpayloadtest.component.html',
  styleUrls: ['./jwtpayloadtest.component.css']
})
export class JwtpayloadtestComponent implements OnInit {

  constructor(private _cookieService:CookieService ) { }

  currentUserName: String;
  currentCookieTest: String;
  currentJWTToken: String;
  currentAppVersion: String;
  currentHeaderPayloadSignature: String;

  ngOnInit() {
    this.currentUserName = this._cookieService.get('USER');
    this.currentCookieTest = this._cookieService.get('cookietest');
    this.currentJWTToken = this._cookieService.get('token');
    this.currentAppVersion = this._cookieService.get('appversion');
  }

  createJWT() {
    this.currentHeaderPayloadSignature = "Clicked!";
  }
}
