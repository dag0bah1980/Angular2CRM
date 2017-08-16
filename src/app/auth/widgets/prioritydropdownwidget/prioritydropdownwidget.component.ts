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

  
  @Input() itemid: number;
  @Input() itemtype: string;
  @Input() priorityid: number;
  
  private data;

  errorMessage = "";
  errorUser = "";
  errorScreen = "Priorities Widget";
  errorAction ="";

  private priorityName = "NOT LOADED";
  private priorityCode = "NOT LOADED";
  public priorityButtonClass = "btn-priority-widget btn-block btn-xs dropdown-toggle";

  private priorityWidgetID = "priorityWidget";

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
          console.log(this.priorityButtonClass);    
          this.priorityName = this.data[0].PRIORITYNAME;
          this.priorityCode = this.data[0].PRIORITYCODE;

          this.priorityWidgetID = "priorityWidget" + this.itemid
          
          let PriorityButton = document.querySelector("[id='#priorityWidget2141961']");   
          if (this.priorityCode==='LOW') {
            this.priorityButtonClass = 'btn-xs btn-block btn-info dropdown-toggle'
            //PriorityButton.classList.add("btn-info")
          } else if (this.priorityCode==='STANDARD') {
            this.priorityButtonClass = 'btn-xs btn-block btn-primary dropdown-toggle'
            //PriorityButton.classList.add("btn-primary")
          } else if (this.priorityCode==='HIGH') {
            this.priorityButtonClass = 'btn-xs btn-block btn-warning dropdown-toggle'
            //PriorityButton.classList.add("btn-warning")
          } else if (this.priorityCode==='SUPERHIGH') {
            this.priorityButtonClass = 'btn-xs btn-block btn-danger dropdown-toggle'
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

  isThisCodeSelected(determinedCode:string) {
    if (determinedCode===this.priorityCode){
      return false;
    } else {
      return true;
    }
  }

}
