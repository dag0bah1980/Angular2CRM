import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang2-crm-data-mgmt-submit',
  templateUrl: './data-mgmt-submit.component.html',
  styleUrls: ['./data-mgmt-submit.component.css']
})
export class DataMgmtSubmitComponent implements OnInit {

  @Input() DataType;
  @Input() Result;
  @Input() CalloutType;
  
  private calloutTitle;
  private calloutText;
  constructor() { }

  ngOnInit() {
    var divToChange = document.getElementById('calloutAfterSubmit');

    if (this.Result=='FAIL') {
      this.calloutTitle = this.DataType + " " + this.CalloutType + ": Failed!" ;
      this.calloutText = "Your attempt to Submit a " + this.DataType + " Failed! (read more details here)";
      divToChange.className = "callout callout-danger";
    }

    if (this.Result=='SUCCESS') {
      this.calloutTitle = this.DataType + " " + this.CalloutType + ": Worked!" ;
      this.calloutText = "Your attempt to Submit a " + this.DataType + " Saved Successfully! (read more details here)";
      divToChange.className = "callout callout-success";
    }
  }

}
