import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang2-crm-projecttypedropdownwidget',
  templateUrl: './projecttypedropdownwidget.component.html',
  styleUrls: ['./projecttypedropdownwidget.component.css']
})
export class ProjecttypedropdownwidgetComponent implements OnInit {

  @Input() itemid: number;
  @Input() itemtype: string;
  @Input() projecttypeid: number;
  constructor() { }

  ngOnInit() {
  }

}
