import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ang2-crm-sidebarnav',
  templateUrl: 'sidebarnav.component.html',
  styleUrls: ['sidebarnav.component.css']
})
export class SidebarnavComponent implements OnInit {

    title = 'Angular2CRM!';
  constructor() { }

  ngOnInit() {
  }

}
