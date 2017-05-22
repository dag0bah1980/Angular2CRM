import { Component, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../services/http.service';
import { TagsService } from '../services/data/tags.service';
import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';

import { Subscription } from 'rxjs/Rx';

import { Tag } from '../class/tag';

@Component({
  selector: 'ang2-crm-edittag',
  templateUrl: './edittag.component.html',
  styleUrls: ['./edittag.component.css'],
  providers: [HttpService, TagsService]
})
export class EdittagComponent implements OnDestroy {

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

  private data;
  //errors is for form validation errors
  private errors;


  private errorMessage;
  private errorAction;
  private errorUser;
  private active;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private _tagService: TagsService,
  private _cookieService: CookieService) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
   }

  ngOnInit() {

    this._tagService.getSpecificTag(this.id).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data; 
          this.tagId= this.id;
          this.tagCreated = data[0].CREATED;
          this.tagModified = data[0].MODIFIED;
          this.tagIsActive = data[0].ISACTIVE; 
          this.tagIsDeleted = data[0].ISDELETED;        
          this.tagTag = data[0].TAG;
          this.tagDescription = data[0].DESCRIPTION;       
          this.active = true;
        }, 1000); 
      },
      APIerror =>  { 
        this.errorMessage = APIerror;
        this.errorAction = "loadTagsObservable";
        this.errorUser = this._cookieService.get('USER');
        document.getElementById("openModalErrorMessageButton").click();
      }
    );

    /*this.httpService.getTagData2().subscribe(
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
    );*/


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*
  active = true;
  model = new Tag(0,'','',true,false,'','');

  newTag() {
    this.model = new Tag(0,'','',true,false,'','');
    this.active = false;
    setTimeout(() => this.active = true,0);
  }*/

  onSubmit(){
    //console.log(JSON.stringify(this.errors));
  }
}
