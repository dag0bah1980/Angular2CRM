import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http } from '@angular/http';

import { StatusesService } from '../services/data/statuses.service';

import { Status } from '../class/status';
import { Observable } from 'rxjs/Rx';

import { ActivestatuslabelComponent } from '../widgets/activestatuslabel/activestatuslabel.component';

import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-liststatuses',
  templateUrl: './liststatuses.component.html',
  styleUrls: ['./liststatuses.component.css']
})
export class ListstatusesComponent implements OnInit {

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

  statuses : Status[];
  
  constructor(private _http: Http, private _statusesservice: StatusesService, 
  private _cookieService: CookieService, private _router: Router) { 
    
  }

  ngOnInit() {
    this.loadTagsObservable();
    this.refreshTime = new Date();
    //testing error message pop up without actual click
    //this works!: document.getElementById("openModalErrorMessageButton").click();
    
    Observable.interval(30000).subscribe(x => {
      this.loadTagsObservable();
      this.refreshTime = new Date();
    });
    console.log('query:' + this.filterQuery);
    this.sortBarVisible = false;
    this.filterBarVisible = false;
    this.toggleFilterBar();
    this.toggleSortBar();
  }  

  loadTagsObservable(){
  this._statusesservice.getStatuses().subscribe(
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

  logicalDeleteTag(deletedStatus: Status){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._statusesservice.logicalDeleteStatus(deletedStatus).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalDeleteStatus";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  logicalUndeleteTag(deletedStatus: Status){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._statusesservice.logicalUndeleteStatus(deletedStatus).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalUndeleteStatus";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  deactivateTag(deactivatedStatus: Status){
    this._statusesservice.deactivateStatus(deactivatedStatus).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "deactivateStatus";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  activateTag(activatedStatus: Status){
    this._statusesservice.activateStatus(activatedStatus).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "activateStatus";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }
  

  onClick(){

  }

  createTag(){
    this._router.navigateByUrl('/auth/createstatus');
  }

  refreshNow(){
    this.loadTagsObservable();
    this.refreshTime = new Date();
  }

  showErrorMessage(){
    console.log("clicked error message / refresh");
  }

  
  private sortBarVisible: boolean = true;
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

  private filterBarVisible: boolean = true;
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
