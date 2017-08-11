import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  private data;
  private filterQuery = "";
  private rowsOnPage = 25;
  private sortBy = "MODIFIED";
  private sortOrder = "desc";

  private Checkbox_ACTIVE: boolean = true;
  private Checkbox_DELETED: boolean = false;

  private editSelectedID;
  private editSelectedTAG;

  currentUserName = "";

  errorMessage = "";
  errorUser = "";
  errorScreen = "List Tags";
  errorAction ="";
  

  refreshTime: Date;

  tags : Tag[];
  
  constructor(private _http: Http, private _tagsservice: TagsService, 
  private _cookieService: CookieService, private _router: Router,
  private _activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    console.log('Root:' + this._activatedRoute.root);
    console.log('Snapshot:' + this._activatedRoute.snapshot);
    console.log('Parent:' + this._activatedRoute.parent);
    console.log('Children:' + this._activatedRoute.children);

    this.loadTagsObservable();
    this.refreshTime = new Date();
    //testing error message pop up without actual click
    //this works!: document.getElementById("openModalErrorMessageButton").click();
    
    Observable.interval(30000).subscribe(x => {
      this.loadTagsObservable();
      this.refreshTime = new Date();
    });
    console.log('query:' + this.filterQuery);
  }  

  loadTagsObservable(){
  this._tagsservice.getTags().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadTagsObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
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
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalDeleteTag";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
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
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "deactivateTag";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
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
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "activateTag";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }
  

  onClick(){

  }

  createTag(){
    this._router.navigateByUrl('/auth/datamgmtmenu/createtag');
  }

  refreshNow(){
    this.loadTagsObservable();
    this.refreshTime = new Date();
  }

  showErrorMessage(){
    console.log("clicked error message / refresh");
  }

  
  private sortBarVisible: boolean = false;
  toggleSortBar(){

    this.sortBarVisible = !this.sortBarVisible;

    let SortBar = document.querySelector(".sort-bar");
    let SortToggler = document.querySelector(".sortToggler");

    if (this.sortBarVisible) {
      SortBar.classList.add("hidden");
      SortToggler.classList.add("disabled");
    } else {
      SortBar.classList.remove("hidden");
      SortToggler.classList.remove("disabled");
    }    
    
  }

  private filterBarVisible: boolean = false;
  toggleFilterBar(){
    this.filterBarVisible = !this.filterBarVisible;

    let FilterBar = document.querySelector(".filter-bar");
    let FilterToggler = document.querySelector(".filterToggler");

    if (this.filterBarVisible) {
      FilterBar.classList.add("hidden");
      FilterToggler.classList.add("disabled");
    } else {
      FilterBar.classList.remove("hidden");
      FilterToggler.classList.remove("disabled");
    }    
  }
}
