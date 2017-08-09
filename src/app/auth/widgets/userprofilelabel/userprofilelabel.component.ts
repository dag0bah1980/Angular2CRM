import { Component } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'ang2-crm-userprofilelabel',
  templateUrl: './userprofilelabel.component.html',
  styleUrls: ['./userprofilelabel.component.css']
})
export class UserprofilelabelComponent {
selectedOption: string;
  constructor(public dialog: MdDialog) {
     
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent,
    {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
  


}

