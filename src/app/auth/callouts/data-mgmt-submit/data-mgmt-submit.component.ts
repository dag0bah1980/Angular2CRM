import { Component, OnChanges, Input, Output } from '@angular/core';

import { TimedatePipe } from '../../pipes/timedate.pipe';

@Component({
  selector: 'ang2-crm-data-mgmt-submit',
  templateUrl: './data-mgmt-submit.component.html',
  styleUrls: ['./data-mgmt-submit.component.css']
})
export class DataMgmtSubmitComponent implements OnChanges {

  @Input() DataType;
  @Input() Result;
  @Input() CalloutType;
  @Input() CodeValue;
  
  private calloutTitle;
  private calloutText;
  private calloutDateTime;
  constructor() { }

  ngOnChanges() {
    this.calloutDateTime = new Date();
    var divToChange = document.getElementById('calloutAfterSubmit');

    if (this.Result=='FAIL') {
      this.calloutTitle = this.DataType + " " + this.CalloutType + ": Failed!" ;
      this.calloutText = "Failed :(";
      divToChange.className = "callout callout-danger";
    }

    if (this.Result=='SUCCESS') {
      this.calloutTitle = this.DataType + " " + this.CalloutType + ": Worked!" ;
      this.calloutText = "Saved Successfully!";
      divToChange.className = "callout callout-success";
    }
    
  }

}
