import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import { TimedatePipe } from '../../../pipes/timedate.pipe';
import { DateTimeLiveServiceService } from '../../../services/date-time-live-service.service';

@Component({
  selector: 'ang2-crm-timebutton',
  templateUrl: './timebutton.component.html',
  styleUrls: ['./timebutton.component.css'],
  providers: [DateTimeLiveServiceService]
})
export class TimebuttonComponent implements OnInit {

  constructor(private dateTimeService: DateTimeLiveServiceService) { }

  currentDateTime: Date;

  ngOnInit() {
    Observable.interval(3000).subscribe(x => {
      this.getTime();
    });
  }

  onClick() {

  }
  
  getTime(): void {
    this.dateTimeService.getDateTimeSlowly().then(currentDateTime => this.currentDateTime = currentDateTime);
  }
}
