import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';

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

  errorMessage: string;

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
  onSubmit(IsActive: boolean, Tag: string, Description: string){
    this.httpService.sendData({isactive:IsActive, tag:Tag, description: Description})
      .subscribe(
         data => console.log(data),
         error => this.errorMessage = <any>error,
         () => console.log('Complete')
      );
    this.submitted = true;
  }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}