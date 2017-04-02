import { Component, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie';



@Component({
  selector: 'ang2-crm-cookie-contents',
  templateUrl: './cookie-contents.component.html',
  styleUrls: ['./cookie-contents.component.css']
})
export class CookieContentsComponent implements OnInit {

  constructor(private _cookieService:CookieService ) {

   }

  private appVersion;

  currentUserName: String;
  currentCookieTest: String;
  currentJWTToken: String;
  currentAppVersion: String;

  ngOnInit() {
    this.currentUserName = this._cookieService.get('USER');
    this.currentCookieTest = this._cookieService.get('cookietest');
    this.currentJWTToken = this._cookieService.get('token');

    this.currentAppVersion = this._cookieService.get('0.0.1');
  }

}
