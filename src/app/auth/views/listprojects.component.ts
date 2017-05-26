import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang2-crm-listprojects',
  templateUrl: './listprojects.component.html',
  styleUrls: ['./listprojects.component.css']
})
export class ListprojectsComponent implements OnInit {

  public sortBy = "MODIFIED";
  public sortOrder = "desc";

  constructor() { }

  ngOnInit() {
  }

}
