import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-cookietest',
  templateUrl: './cookietest.component.html',
  styleUrls: ['./cookietest.component.css']
})
export class CookietestComponent implements OnInit {

  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
    
  }

  createCookie() {
    this._cookieService.put('cookietest', 'cookietestvalue');
    console.log("Set Test Cookie as Test");
  }

   readCookie() {
    
    console.log("cookietest value is: " + this._cookieService.get('cookietest'));
  }
}
