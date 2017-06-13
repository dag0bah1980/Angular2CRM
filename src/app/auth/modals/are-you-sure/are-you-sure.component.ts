import { Component, OnInit, ViewChild, Input} from '@angular/core';

import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ang2-crm-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.css']
})
export class AreYouSureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
}
