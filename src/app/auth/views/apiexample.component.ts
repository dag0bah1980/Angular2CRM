import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpapiService } from '../services/httpapi.service';

@Component({
  selector: 'ang2-crm-apiexample',
  templateUrl: './apiexample.component.html',
  styleUrls: ['./apiexample.component.css'],
  providers: [HttpapiService]
})
export class ApiexampleComponent implements OnInit {

  constructor(private httpapiservice: HttpapiService) { }

  ngOnInit() {
    this.httpapiservice.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

}
