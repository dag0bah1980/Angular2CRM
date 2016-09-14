import { Component, OnInit } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'ang2-crm-bodydetail',
  templateUrl: 'bodydetail.component.html',
  styleUrls: ['bodydetail.component.css']
})

export class BodydetailComponent implements OnInit {

  //this needs to come from the route component passed.
  subheaderstring:string = 'This text needs to come from the route component passed'

  constructor() {
   }

  ngOnInit() {
  }

}
