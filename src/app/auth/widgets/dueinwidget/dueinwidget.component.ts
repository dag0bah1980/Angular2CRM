import { Component, OnInit, Input } from '@angular/core';

import { TimedatePipe } from '../../pipes/timedate.pipe';

import * as moment from 'moment-timezone';

@Component({
  selector: 'ang2-crm-dueinwidget',
  templateUrl: './dueinwidget.component.html',
  styleUrls: ['./dueinwidget.component.css']
})
export class DueinwidgetComponent implements OnInit {

  @Input() DueTimeDate: string;
  

  private CurrentTimeDate = new Date();
  public DueInWidgetClass = "badge bg-red";
  public DiffDate: any;
  constructor() { }

  ngOnInit() {
    this.calculateDueDateWarning();
  }

  calculateDueDateWarning(){
    let diffInMs: number = Date.parse(this.DueTimeDate) - Date.parse(moment(this.CurrentTimeDate).format('ddd MMM DD YYYY[@]h:mm:ss a'));
    let diffInHours: number = diffInMs / 1000 / 60 / 60;
    console.log("CURRENTLY: " + Date.parse(this.CurrentTimeDate.toDateString()));
    console.log("DUE: " + Date.parse(this.DueTimeDate));
    console.log("diffInMS:" + diffInMs);
    console.log("diffInHours:" + diffInHours);
    
    if (diffInHours > 240) {
      //hide the warning because the due date is greater than 10 days
      this.DueInWidgetClass = "hidden";
  
    } else if (diffInHours <= 240 && diffInHours >= 24) {
      //show number of days warning because the due date is greater than 1 day
      this.DueInWidgetClass = "badge bg-green";
      this.DiffDate = Math.floor(diffInHours/24) + " Days";

    } else if (diffInHours < 24 && diffInHours >= 1 ) {
      //show number of hours warning because the due date is greater than 1 hour
      this.DueInWidgetClass = "badge bg-orange";
      this.DiffDate = Math.floor(diffInHours) + " Hours";

    } else if (diffInHours < 1 && diffInHours >0 ) {
      //show number of minutes warning because the due date is less than 1 hour
      this.DueInWidgetClass = "badge bg-red";
      this.DiffDate = Math.floor(diffInHours / 60) + " Mins";
    } else if (diffInHours <= 0) {
      this.DueInWidgetClass = "badge bg-black";
      this.DiffDate = "LATE!"
    }

    //console.log (this.DueTimeDate +"|" + this.CurrentTimeDate.toDateString())
    //this.DiffDate = diffInHours;
  }
}
