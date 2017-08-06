import { Component, OnInit } from '@angular/core';
import { NguiOverlayManager } from '@ngui/overlay';

@Component({
  selector: 'ang2-crm-userprofilelabel',
  templateUrl: './userprofilelabel.component.html',
  styleUrls: ['./userprofilelabel.component.css']
})
export class UserprofilelabelComponent implements OnInit {

  constructor(public overlayManager: NguiOverlayManager) { }


  ngOnInit() {

  }

  ngAfterViewInit(): void {
      window.scroll(0,0);
  }



}
