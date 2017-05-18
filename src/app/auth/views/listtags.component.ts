import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { TagsService } from '../services/data/tags.service';

import { Tag } from '../class/tag';
import { Observable } from 'rxjs/Rx';

import { ActivestatuslabelComponent } from '../widgets/activestatuslabel/activestatuslabel.component';

import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';


@Component({
  selector: 'ang2-crm-listtags',
  templateUrl: './listtags.component.html',
  styleUrls: ['./listtags.component.css'],
  providers: [ TagsService ]
})
export class ListtagsComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 25;
  public sortBy = "LOGINTIME";
  public sortOrder = "desc";

  currentUserName = "";

  errorMessage = "";
  errorUser = "";
  errorScreen = "List Tags";
  errorAction ="";
  

  refreshTime: Date;

  tags : Tag[];
  
  constructor(private _http: Http, private _tagsservice: TagsService, private _cookieService: CookieService) { 
    
  }

  ngOnInit() {
    this.loadTagsObservable();
    //testing error message pop up without actual click
    //this works!: document.getElementById("openModalErrorMessageButton").click();
    
    Observable.interval(30000).subscribe(x => {
      this.loadTagsObservable();
      this.refreshTime = new Date();
    });
  }  

  loadTagsObservable(){
  this._tagsservice.getTags().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      }
    );
  }

  logicalDeleteTag(deletedTag: Tag){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._tagsservice.logicalDeleteTag(deletedTag).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      }
    );
  }

  logicalUndeleteTag(deletedTag: Tag){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._tagsservice.logicalUndeleteTag(deletedTag).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalUndeleteTag";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  deactivateTag(deactivatedTag: Tag){
    this._tagsservice.deactivateTag(deactivatedTag).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      }
    );
  }

  activateTag(activatedTag: Tag){
    this._tagsservice.activateTag(activatedTag).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      }
    );
  }
  

  onClick(){

  }

  passErrorMessage(error: any) {
    console.log("error is:" + error)
  }

  showErrorMessage(){
    console.log("clicked error message / refresh");
  }
}
