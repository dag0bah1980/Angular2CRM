import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthenticationService } from '../../services/authentication.service';

import { Router } from '@angular/router';

import { DateTimeLiveServiceService } from '../services/date-time-live-service.service';

import { TimedatePipe } from '../pipes/timedate.pipe';

import {Observable} from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'ang2-crm-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css'],
  providers: [DateTimeLiveServiceService]
})
export class HeaderbarComponent implements OnInit {

  constructor(public _authenticationService: AuthenticationService, private _router: Router, private dateTimeService: DateTimeLiveServiceService,
    private _cookieService:CookieService ) { }
  

  currentDateTime: Date;
  currentUserName: String;
  _jwtHelper: JwtHelper = new JwtHelper();
  currentTokenExpiry: Date;

  ngOnInit() {
    //Observable example of getting time from a Service: https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
    //this.getTime();

    Observable.interval(3000).subscribe(x => {
      this.getTime();
    });

    this.currentUserName = this._cookieService.get('USER');
    this.currentTokenExpiry = this._jwtHelper.getTokenExpirationDate(this._cookieService.get('token'));
  }

  getTime(): void {
    //this.currentDateTime = this.dateTimeService.getDateTime();
    //this.dateTimeService.getDateTime2().then(currentDateTime => this.currentDateTime = currentDateTime);
    this.dateTimeService.getDateTimeSlowly().then(currentDateTime => this.currentDateTime = currentDateTime);
  }

  LogOut(){
    //alert("log this user out");    
    console.log ('Logout button clicked');
    this._authenticationService.logoutproper()
        .subscribe(result => {
            if (result === true) {
                // logout successful                   
                console.log ('logout successful');
            } else {
                // logout failed
                
            }
        });
    this._router.navigate(['/']);
  }

  onClick(){
  }


  private navBarSmall: boolean = false;
  ToggleNavBar(){
    this.navBarSmall = !this.navBarSmall;

    let navBarControl = document.querySelector("body.sidebar-mini");
    if (this.navBarSmall) {
      navBarControl.classList.add("sidebar-collapse");
      navBarControl.classList.remove("sidebar-open");
    } else {
      navBarControl.classList.remove("sidebar-collapse");
      navBarControl.classList.add("sidebar-open");

    }
  }
  
}
