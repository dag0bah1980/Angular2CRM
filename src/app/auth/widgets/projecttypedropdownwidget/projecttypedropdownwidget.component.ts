import { Component, OnInit, Input } from '@angular/core';

import { Http } from '@angular/http';

import { PrioritiesService } from '../../services/data/priorities.service';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-projecttypedropdownwidget',
  templateUrl: './projecttypedropdownwidget.component.html',
  styleUrls: ['./projecttypedropdownwidget.component.css'],
  providers: [ PrioritiesService ]
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

  constructor(private _http: Http, private _prioritiesservice: PrioritiesService, private _cookieService: CookieService) { }

  ngOnInit() {
    this.loadSpecificProjectTypeObservable(this.projecttypeid); 
  }

  loadSpecificProjectTypeObservable(searchID: number){
    this._prioritiesservice.getSpecificPriority(searchID).subscribe(
        data => {
        setTimeout(()=> {
          this.data = data;        
          console.log(this.projectTypeButtonClass);    
          this.projecttypeName = this.data[0].PRIORITYNAME;
          this.projecttypeCode = this.data[0].PRIORITYCODE;

          this.projectTypeWidgetID = "priorityWidget" + this.itemid
          
          let ProjectTypeButton = document.querySelector("[id='#projecttypeWidget2141961']");   
          if (this.projecttypeCode==='LOW') {
            this.projectTypeButtonClass = 'btn-xs btn-block btn-info dropdown-toggle'
            //PriorityButton.classList.add("btn-info")
          } else if (this.projecttypeCode==='STANDARD') {
            this.projectTypeButtonClass = 'btn-xs btn-block btn-primary dropdown-toggle'
            //PriorityButton.classList.add("btn-primary")
          } else if (this.projecttypeCode==='HIGH') {
            this.projectTypeButtonClass = 'btn-xs btn-block btn-warning dropdown-toggle'
            //PriorityButton.classList.add("btn-warning")
          } else if (this.projecttypeCode==='SUPERHIGH') {
            this.projectTypeButtonClass = 'btn-xs btn-block btn-danger dropdown-toggle'
            //PriorityButton.classList.add("btn-danger")
          }
                   
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadSpecificPriorityObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );

    
  }
}
