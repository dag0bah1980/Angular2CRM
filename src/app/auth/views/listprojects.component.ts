import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http } from '@angular/http';

import { ProjectsService } from '../services/data/projects.service';

import { Project } from '../class/project';
import { Observable } from 'rxjs/Rx';

import { ActivestatuslabelComponent } from '../widgets/activestatuslabel/activestatuslabel.component';

import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-listprojects',
  templateUrl: './listprojects.component.html',
  styleUrls: ['./listprojects.component.css'],
  providers: [ ProjectsService ]
})
export class ListprojectsComponent implements OnInit {

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
  errorScreen = "List Projects / Tasks";
  errorAction ="";
  

  refreshTime: Date;

  projects : Project[];
  
  constructor(private _http: Http, private _projectsservice: ProjectsService, 
  private _cookieService: CookieService, private _router: Router) { 
    
  }

  ngOnInit() {
    this.loadProjectsObservable();
    this.refreshTime = new Date();
    //testing error message pop up without actual click
    //this works!: document.getElementById("openModalErrorMessageButton").click();
    
    Observable.interval(300000).subscribe(x => {
      this.loadProjectsObservable();
      this.refreshTime = new Date();
    });
    console.log('query:' + this.filterQuery);
  }  

  loadProjectsObservable(){
  this._projectsservice.getProjects().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadProjectsObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  logicalDeleteProject(deletedProject: Project){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._projectsservice.logicalDeleteProject(deletedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalDeleteProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  logicalUndeleteProject(deletedProject: Project){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._projectsservice.logicalUndeleteProject(deletedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalUndeleteProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  deactivateProject(deactivatedProject: Project){
    this._projectsservice.deactivateProject(deactivatedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "deactivateProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  activateProject(activatedProject: Project){
    this._projectsservice.activateProject(activatedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "activateProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }
  

  onClick(){

  }

  createProject(){
    this._router.navigateByUrl('/auth/createproject');
  }

  refreshNow(){
    this.loadProjectsObservable();
    this.refreshTime = new Date();
  }

  showErrorMessage(){
    console.log("clicked error message / refresh");
  }
  
}
