import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { DateTimeLiveServiceService } from '../services/date-time-live-service.service';

@Component({
  selector: 'ang2-crm-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css'],
  providers: [DateTimeLiveServiceService]
})
export class HeaderbarComponent implements OnInit {

  constructor(public authService: AuthService, private _router: Router, private dateTimeService: DateTimeLiveServiceService ) { }
  

  currentDateTime: Date;

  ngOnInit() {
    //Observable example of getting time from a Service: https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
    this.currentDateTime = this.dateTimeService.getDateTime();
  }


  LogOut(){
    //alert("log this user out");
    this.authService.logout();
    this._router.navigate(['/']);
  }

  onClick(){
  }
}
