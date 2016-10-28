import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from '../http.service';

import { Tag } from '../class/tag';

@Component({
  selector: 'ang2-crm-listtags',
  templateUrl: './listtags.component.html',
  styleUrls: ['./listtags.component.css'],
  providers: [HttpService]
})
export class ListtagsComponent implements OnInit {

  tags = [
    {
      ID: 10026,
      CREATED: "2016-10-22T13:47:25.068",
      MODIFIED: "2016-10-22T13:47:25.068",
      ISACTIVE: false,
      ISDELETED: false,
      TAG: "ed",
      DESCRIPTION: "we"
      },
      {
      ID: 10036,
      CREATED: "2016-10-24T21:03:30.712",
      MODIFIED: "2016-10-24T21:03:30.712",
      ISACTIVE: true,
      ISDELETED: false,
      TAG: "qwerty",
      DESCRIPTION: "testing a longer description in tags... also adding special characters like ' and '' and "
      },
      {
      ID: 10037,
      CREATED: "2016-10-27T21:13:38.004",
      MODIFIED: "2016-10-27T21:13:38.004",
      ISACTIVE: true,
      ISDELETED: false,
      TAG: "asdf",
      DESCRIPTION: "qwerty"
    }
  ]
  constructor( private httpService: HttpService) { 
    
  }

  ngOnInit() {
    this.httpService.getAllTags().subscribe(
      data => { 
        console.log(data);
      }
    );
  }

}
