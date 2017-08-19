import { Component, OnInit, Input } from '@angular/core';

import { Http } from '@angular/http';

import { ProjecttypesService } from '../../services/data/projecttypes.service';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-projecttypedropdownwidget',
  templateUrl: './projecttypedropdownwidget.component.html',
  styleUrls: ['./projecttypedropdownwidget.component.css'],
  providers: [ ProjecttypesService ]
})
export class ProjecttypedropdownwidgetComponent implements OnInit {

  @Input() itemid: number;
  @Input() itemtype: string;
  @Input() projecttypeid: number;

  private data;

  errorMessage = "";
  errorUser = "";
  errorScreen = "Priorities Widget";
  errorAction ="";

  private projecttypeName = "NOT LOADED";
  private projecttypeCode = "NOT LOADED";
  public projectTypeButtonClass = "btn-priority-widget btn-block btn-xs dropdown-toggle";

  private projectTypeWidgetID = "projectTypeWidget";

  constructor(private _http: Http, private _projecttypesservice: ProjecttypesService, private _cookieService: CookieService) { }

  ngOnInit() {
    this.loadSpecificProjectTypeObservable(this.projecttypeid); 
  }

  loadSpecificProjectTypeObservable(searchID: number){
    this._projecttypesservice.getSpecificProjectType(searchID).subscribe(
        data => {
        setTimeout(()=> {
          this.data = data;        
          console.log(this.projectTypeButtonClass);    
          this.projecttypeName = this.data[0].PROJTYPENAME;
          this.projecttypeCode = this.data[0].PROJTYPECODE;

          this.projectTypeWidgetID = "projecttypeWidget" + this.itemid
           
          if (this.projecttypeCode==='PROJECT') {
            this.projectTypeButtonClass = 'btn-xs btn-block bg-navy dropdown-toggle'
          } else if (this.projecttypeCode==='TASK') {
            this.projectTypeButtonClass = 'btn-xs btn-block bg-blue dropdown-toggle'
          } else if (this.projecttypeCode==='SUBTASK') {
            this.projectTypeButtonClass = 'btn-xs btn-block bg-aqua dropdown-toggle'
          } 
                   
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadSpecificProjectTypeObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );

    
  }
}
