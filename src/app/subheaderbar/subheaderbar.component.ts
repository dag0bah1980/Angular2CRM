import { Component, OnInit, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'ang2-crm-subheaderbar',
  templateUrl: 'subheaderbar.component.html',
  styleUrls: ['subheaderbar.component.css']
})

export class SubheaderbarComponent implements OnInit {

  @Input() subheaderpath:string;
  
  constructor() { 

  }

  ngOnInit() {

  }

}
