import { Component, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie';



@Component({
  selector: 'ang2-crm-cookie-contents',
  templateUrl: './cookie-contents.component.html',
  styleUrls: ['./cookie-contents.component.css']
})
export class CookieContentsComponent implements OnInit {

  constructor(private _cookieService:CookieService ) { }

  currentUserName: String;
  currentJWTToken: String;

  ngOnInit() {
    this.currentUserName = this._cookieService.get('USER');
    this.currentJWTToken = this._cookieService.get('token');
  }

}
