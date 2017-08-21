import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang2-crm-recurringprojectwidget',
  templateUrl: './recurringprojectwidget.component.html',
  styleUrls: ['./recurringprojectwidget.component.css']
})
export class RecurringprojectwidgetComponent implements OnInit {

  @Input() isThisProjectRecurring: boolean;

  public recurringProjectClass = "fa fa-spin fa-refresh";
  constructor() { }

  ngOnInit() {
    if (this.isThisProjectRecurring) {
      this.recurringProjectClass = "fa fa-spin fa-refresh";
    } else  {
      this.recurringProjectClass = "hidden fa fa-spin fa-refresh";
    }
  }

}
