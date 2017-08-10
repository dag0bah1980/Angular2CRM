import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
  selector: 'ang2-crm-userprofilelabeldialog',
  templateUrl: './userprofilelabeldialog.component.html',
  styleUrls: ['./userprofilelabeldialog.component.css']
})
export class UserprofilelabeldialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<UserprofilelabeldialogComponent>) { }

  ngOnInit() {
  }

}
