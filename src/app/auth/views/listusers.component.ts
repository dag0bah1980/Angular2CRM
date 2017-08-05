import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Http } from '@angular/http';

import { UsersService } from '../services/data/users.service';

import { User } from '../class/user';
import { Observable } from 'rxjs/Rx';

import { ActivestatuslabelComponent } from '../widgets/activestatuslabel/activestatuslabel.component';

import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css'],
  providers: [ UsersService ]
})
export class ListusersComponent implements OnInit {

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

  users : User[];
  
  constructor(private _http: Http, private _usersservice: UsersService, 
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
  this._usersservice.getUsers().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadUsersObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  logicalDeleteUser(deletedUser: User){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._usersservice.logicalDeleteUsers(deletedUser).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalDeleteUser";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  logicalUndeleteUser(deletedUser: User){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._usersservice.logicalUndeleteUser(deletedUser).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalUndeleteUser";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  deactivateUser(deactivatedUser: User){
    this._usersservice.deactivateUser(deactivatedUser).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "deactivateUser";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  activateUser(activatedUser: User){
    this._usersservice.activateUser(activatedUser).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "activateUser";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }
  

  onClick(){

  }

  createUser(){
    this._router.navigateByUrl('/auth/createuser');
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
