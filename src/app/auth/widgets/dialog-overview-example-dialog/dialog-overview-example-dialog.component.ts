import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';


@Component({
  selector: 'ang2-crm-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogOverviewExampleDialogComponent>) { }

  ngOnInit() {
    
  }

}
