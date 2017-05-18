import { Component, OnInit, Input } from '@angular/core';

import { TimedatePipe } from '../../pipes/timedate.pipe';

@Component({
  selector: 'ang2-crm-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  @Input() i_error : any;
  @Input() i_username: any;
  @Input() i_screen: any;
  @Input() i_action: any;

  constructor() { }

  ngOnInit() {
    this.now = new Date;
  }

  private now: Date;
  
}
