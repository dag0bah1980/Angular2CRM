import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../http.service';

import { Subscription } from 'rxjs/Rx';

import { Tag } from '../class/tag';

@Component({
  selector: 'ang2-crm-deletetag',
  templateUrl: './deletetag.component.html',
  styleUrls: ['./deletetag.component.css'],
  providers: [HttpService]
})
export class DeletetagComponent implements OnInit {

  private subscription: Subscription;
  id: number;
  activeTag: Tag;  

  tagId: number;
  tagIsActive: boolean;
  tagIsDeleted: boolean;
  tagCreated: string;
  tagModified: string;
  tagTag: string = '';
  tagDescription: string = '';

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
   }
   
  ngOnInit() {
    this.httpService.getTagData2().subscribe(
      data => { 
        console.log(data);
        console.log(data.Meta);
        console.log(data.Data[0].CREATED);
        
        this.tagId= this.id;
        this.tagCreated = data.Data[0].CREATED;
        this.tagModified = data.Data[0].MODIFIED;
        this.tagIsActive = data.Data[0].ISACTIVE; 
        this.tagIsDeleted = data.Data[0].ISDELETED;        
        this.tagTag = data.Data[0].TAG;
        this.tagDescription = data.Data[0].DESCRIPTION;

        //this.model = new Tag(this.id,this.tagCreated,this.tagModified,this.tagIsActive,this.tagIsDeleted,this.tagTag,this.tagDescription);
      }
    );
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  active = true;
  model = new Tag(0,'','',true,false,'','');

  newTag() {
    this.model = new Tag(0,'','',true,false,'','');
    this.active = false;
    setTimeout(() => this.active = true,0);
  }
}
