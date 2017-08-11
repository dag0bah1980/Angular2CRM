import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang2-crm-severitydropdownwidget',
  templateUrl: './severitydropdownwidget.component.html',
  styleUrls: ['./severitydropdownwidget.component.css']
})
export class SeveritydropdownwidgetComponent implements OnInit {

  @Input() currentTier: string;
  public tierText: string;
  public tierClass: string;

  constructor() { }

  ngOnInit() {
    console.log (this.currentTier);
    if (this.currentTier=='T0'){
      this.tierText = 'T0';
      this.tierClass = 'btn-xs btn-gray dropdown-toggle';
    } else if (this.currentTier=='T1'){
      this.tierText = 'T1';
      this.tierClass = 'btn-xs btn-info dropdown-toggle';
    } else if (this.currentTier=='T2'){
      this.tierText = 'T2';
      this.tierClass = 'btn-xs btn-primary dropdown-toggle';
    } else if (this.currentTier=='T3'){
      this.tierText = 'T3';
      this.tierClass = 'btn-xs btn-warning dropdown-toggle';
    } else if (this.currentTier=='T4'){
      this.tierText = 'T4';
      this.tierClass = 'btn-xs btn-danger dropdown-toggle';
    } else {
      this.tierText="ERROR";
      this.tierClass = 'btn-xs btn-gray dropdown-toggle';
    }
  }

}
