import { Component, OnInit, ViewChild} from '@angular/core';

import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ang2-crm-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.css']
})
export class AreYouSureComponent implements OnInit {

  constructor() { }

  public ModalMessage: string;
  ngOnInit() {

  }

  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal(MessageType: string):void {
    if (MessageType == "CANCEL") {
      this.ModalMessage = "Are you sure you want to cancel?";
    }
    else if (MessageType == "SUBMIT") {
      this.ModalMessage = "Are you sure you want to submit changes?";
    }
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
}
