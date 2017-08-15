import { Component, OnInit, Input } from '@angular/core';

import { Http } from '@angular/http';

import { PrioritiesService } from '../../services/data/priorities.service';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-prioritydropdownwidget',
  templateUrl: './prioritydropdownwidget.component.html',
  styleUrls: ['./prioritydropdownwidget.component.css'],
  providers: [ PrioritiesService ]
})
export class PrioritydropdownwidgetComponent implements OnInit {

  public priorityButtonClass;
  @Input() itemid: number;
  @Input() itemtype: string;
  @Input() priorityid: number;
  
  private data;

  errorMessage = "";
  errorUser = "";
  errorScreen = "Priorities Widget";
  errorAction ="";

  private priorityName = "asdf";

  constructor(private _http: Http, private _prioritiesservice: PrioritiesService, private _cookieService: CookieService) 
  { 
    
  }

  ngOnInit() {
    this.loadSpecificPriorityObservable(this.priorityid);
    
  }

  loadSpecificPriorityObservable(searchID: number){
    this._prioritiesservice.getSpecificPriority(searchID).subscribe(
        data => {
        setTimeout(()=> {
          this.data = data;        
          console.log(this.data[0].PRIORITYNAME);    
          this.priorityName = this.data[0].PRIORITYNAME;
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
