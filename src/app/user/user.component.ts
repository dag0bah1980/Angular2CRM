import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ang2-crm-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {

  SubHeaderTitle: string = 'User';
  
  constructor() { }

  ngOnInit() {
  }

}
