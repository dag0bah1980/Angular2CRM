import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from '../../http.service';

@Component({
  moduleId: module.id,
  selector: 'ang2-crm-info-box-hdd-info',
  templateUrl: 'info-box-hdd-info.component.html',
  styleUrls: ['info-box-hdd-info.component.css'],
  providers: [HttpService]
})
export class InfoBoxHddInfoComponent implements OnInit {
  items: any[];

  AvailableSpaceValue = '';
  value='';
  constructor( private httpService: HttpService) { 
    
  }

  ngOnInit() {
    

    this.httpService.getData().subscribe(
      availablespace => { console.log(availablespace);
      this.AvailableSpaceValue = availablespace }
    );

    console.log(this.AvailableSpaceValue);

    
  }

}
