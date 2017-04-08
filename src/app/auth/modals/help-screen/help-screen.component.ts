import { Component, OnInit, ViewChild, Input} from '@angular/core';

import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { ModalDirective } from 'ngx-bootstrap/modal';



@Component({
  selector: 'ang2-crm-help-screen',
  templateUrl: './help-screen.component.html',
  styleUrls: ['./help-screen.component.css']
})
export class HelpScreenComponent implements OnInit {

  @Input() helpID:string;

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
