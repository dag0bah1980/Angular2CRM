import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

import { Tag } from '../class/tag';

@Component({
  selector: 'ang2-crm-edittag',
  templateUrl: './edittag.component.html',
  styleUrls: ['./edittag.component.css'],
  providers: [HttpService]
})
export class EdittagComponent implements OnInit {
  id: string;

  constructor(private httpService: HttpService) {
    //this.id = activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
  }

model = new Tag(0,'','',true,false,'','');

  active = true;
  newTag() {
    this.model = new Tag(0,'','',true,false,'','');
    this.active = false;
    setTimeout(() => this.active = true,0);
  }
}
