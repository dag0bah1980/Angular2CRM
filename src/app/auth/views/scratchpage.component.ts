import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang2-crm-scratchpage',
  templateUrl: './scratchpage.component.html',
  styleUrls: ['./scratchpage.component.css']
})
export class ScratchpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  disableDiv(string){
    console.log(string);
    this.addOverlay ? this.addOverlay = false : this.addOverlay = true;
  }

  addOverlay = true;
}
