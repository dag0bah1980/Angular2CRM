import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang2-crm-activestatuslabel',
  templateUrl: './activestatuslabel.component.html',
  styleUrls: ['./activestatuslabel.component.css']
})
export class ActivestatuslabelComponent implements OnInit {

  public activeLabelStatusClass;
  public activeLabelStatusText;
  public deletedLabelStatusClass;
  public deletedLabelStatusText = 'DELETED';
  @Input() activestatus: boolean;
  @Input() deletedstatus: boolean;

  //@Input() id: number;

  constructor() {
    //console.log('Status is:' + this.activestatus + 'Deleted is:' + this.deletedstatus);
   }

  ngOnInit() {  
    //console.log('ngoninit Status is:' + this.status + ', id is:' + this.id);
    if (!this.activestatus){
      this.activeLabelStatusClass = 'label label-warning';
      this.activeLabelStatusText = 'INACTIVE';
    } else if (this.activestatus){
      this.activeLabelStatusClass = 'label label-success';
      this.activeLabelStatusText = 'ACTIVE';
    } else {
      this.activeLabelStatusClass = 'label label-info';
      this.activeLabelStatusText = 'ERROR';
    }

    if (this.deletedstatus){
      this.deletedLabelStatusClass = 'label label-danger';
      this.deletedLabelStatusText = 'DELETED';
    } else if (!this.deletedstatus){
      this.deletedLabelStatusClass = false;
      this.deletedLabelStatusText = '';    
    } else {
      this.deletedLabelStatusClass = 'label label-info';
      this.deletedLabelStatusText = 'ERROR';
    }
  }

  
}
