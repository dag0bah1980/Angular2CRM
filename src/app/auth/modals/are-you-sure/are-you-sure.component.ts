import { Component, OnInit, ViewChild, Input} from '@angular/core';

import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ang2-crm-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.css']
})
export class AreYouSureComponent implements OnInit {


  @Input() ModalType;
  successText: string;
  dangerText: string;

  constructor() { }

  public ModalMessage: string;
  ngOnInit() {
    console.log('ngonit:' + this.ModalType);

    if (this.ModalType == "CANCEL") {
      this.ModalMessage = "Are you sure you want to cancel?";
      this.successText = "Yes, Cancel Changes";
      this.dangerText = "No, Keep Changes and go back to Form";
    }
    else if (this.ModalType == "SUBMIT") {
      this.ModalMessage = "Are you sure you want to submit changes?";
      this.successText = "Yes, Save my Changes";
      this.dangerText = "No, go back to Form";
    }
  }

  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    console.log(this.ModalType);
    if (this.ModalType == "CANCEL") {
      this.ModalMessage = "Are you sure you want to cancel?";
    }
    else if (this.ModalType == "SUBMIT") {
      this.ModalMessage = "Are you sure you want to submit changes?";
    }
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

  public successClick(): void {

  }

  public dangerClick(): void {

  }

}
