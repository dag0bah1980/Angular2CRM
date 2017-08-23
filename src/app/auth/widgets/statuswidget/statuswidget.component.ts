import { Component, OnInit, Input } from '@angular/core';

import { Http } from '@angular/http';

import { StatusesService } from '../../services/data/statuses.service';

import { CookieService } from 'angular2-cookie';


@Component({
  selector: 'ang2-crm-statuswidget',
  templateUrl: './statuswidget.component.html',
  styleUrls: ['./statuswidget.component.css'],
  providers: [ StatusesService ]
})
export class StatuswidgetComponent implements OnInit {

  @Input() itemid: number;
  @Input() itemtype: string;
  @Input() statusid: number;
  
  private data;

  errorMessage = "";
  errorUser = "";
  errorScreen = "Status Widget";
  errorAction ="";

  private statusName = "NOT LOADED";
  private statusCode = "NOT LOADED";
  public statusButtonClass = "btn-priority-widget btn-block btn-xs dropdown-toggle";

  private statusWidgetID = "statusWidget";

  constructor(private _http: Http, private _statusesservice: StatusesService, private _cookieService: CookieService) 
  { 
    
  }

  ngOnInit() {
    this.loadSpecificStatusObservable(this.statusid);  
    
  }

  loadSpecificStatusObservable(searchID: number){
    this._statusesservice.getSpecificStatus(searchID).subscribe(
        data => {
        setTimeout(()=> {
          this.data = data;        
          console.log(this.statusButtonClass);    
          this.statusName = this.data[0].STATUSNAME;
          this.statusCode = this.data[0].STATUSCODE;

          this.statusWidgetID = "statusWidget" + this.itemid

          if (this.statusCode==='NEW') {
            this.statusButtonClass = 'btn-xs btn-block btn-info dropdown-toggle'

          } else if (this.statusCode==='PENDINGAPPROVAL') {
            this.statusButtonClass = 'btn-xs btn-block btn-warning dropdown-toggle'

          } else if (this.statusCode==='PAUSEDREVIEWRD') {
            this.statusButtonClass = 'btn-xs btn-block bg-maroon dropdown-toggle'

          } else if (this.statusCode==='OPENUNASSIGNED') {
            this.statusButtonClass = 'btn-xs btn-block btn-danger dropdown-toggle'

          } else if (this.statusCode==='OPENASSIGNED') {
            this.statusButtonClass = 'btn-xs btn-block btn-primary dropdown-toggle'

          } else if (this.statusCode==='WORKINPROGRESS') {
            this.statusButtonClass = 'btn-xs btn-block bg-purple dropdown-toggle'

          } else if (this.statusCode==='DELETED') {
            this.statusButtonClass = 'btn-xs btn-block bg-black dropdown-toggle'

          } else if (this.statusCode==='CLOSEDPARTIALRES') {
            this.statusButtonClass = 'btn-xs btn-block bg-gray dropdown-toggle'

          } else if (this.statusCode==='CLOSEDNORESOLUTION') {
            this.statusButtonClass = 'btn-xs btn-block bg-gray dropdown-toggle'

          } else if (this.statusCode==='COMPLETED') {
            this.statusButtonClass = 'btn-xs btn-block btn-success dropdown-toggle'

          }
                   
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadSpecificStatusObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );

    
  }

  isThisCodeSelected(determinedCode:string) {
    if (determinedCode===this.statusCode){
      return false;
    } else {
      return true;
    }
  }

}
