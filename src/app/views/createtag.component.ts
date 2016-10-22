import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

import { Tag } from '../class/tag';

@Component({
  selector: 'ang2-crm-createtag',
  templateUrl: './createtag.component.html',
  styleUrls: ['./createtag.component.css'],
  providers: [HttpService]
})
export class CreatetagComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  

  model = new Tag(0,'','',true,false,'','');

  active = true;
  newTag() {
    this.model = new Tag(0,'','',true,false,'','');
    this.active = false;
    setTimeout(() => this.active = true,0);
  }

  submitted = false;
  //onSubmit() { this.submitted = true; }
  // Original on Submit...
  onSubmit(){
    this.httpService.sendData({active:this.model.ISACTIVE, tag:this.model.TAG, description: this.model.DESCRIPTION})
      .subscribe(
        data => console.log(data)
      );
    this.submitted = true;
  }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
