import { Component, OnInit, Input } from '@angular/core';

import { Http } from '@angular/http';

import { TiersService } from '../../services/data/tiers.service';

import { CookieService } from 'angular2-cookie';


@Component({
  selector: 'ang2-crm-severitydropdownwidget',
  templateUrl: './severitydropdownwidget.component.html',
  styleUrls: ['./severitydropdownwidget.component.css'],
  providers: [ TiersService ]
})
export class SeveritydropdownwidgetComponent implements OnInit {

  @Input() itemid: number;
  @Input() itemtype: string;
  @Input() tierid: number;
  
  private data;

  errorMessage = "";
  errorUser = "";
  errorScreen = "Tier Widget";
  errorAction ="";

  private tierCode = "NOT LOADED";
  private tierName = "NOT LOADED";
  private tierDescription = "NOT LOADED";
  public tierButtonClass = "btn-priority-widget btn-block btn-xs dropdown-toggle";

  private tierWidgetID = "tierWidget";

  constructor(private _http: Http, private _tiersservice: TiersService, private _cookieService: CookieService) 
  { 
    
  }

  ngOnInit() {
    this.loadSpecificTierObservable(this.tierid);  
    
  }

  loadSpecificTierObservable(searchID: number){
    this._tiersservice.getSpecificTier(searchID).subscribe(
        data => {
        setTimeout(()=> {
          this.data = data;        
          console.log(this.tierButtonClass);    
          this.tierName = this.data[0].TIERNAME;
          this.tierCode = this.data[0].TIERCODE;
          this.tierDescription = this.data[0].DESCRIPTION;
          this.tierWidgetID = "tierWidget" + this.itemid

          if (this.tierCode=='T0'){
 
            this.tierButtonClass = 'btn-xs btn-gray dropdown-toggle';
          } else if ( this.tierCode=='T1'){

            this.tierButtonClass = 'btn-xs btn-info dropdown-toggle';
          } else if ( this.tierCode=='T2'){

            this.tierButtonClass = 'btn-xs btn-primary dropdown-toggle';
          } else if ( this.tierCode=='T3'){

            this.tierButtonClass = 'btn-xs btn-warning dropdown-toggle';
          } else if ( this.tierCode=='T4'){

            this.tierButtonClass = 'btn-xs btn-danger dropdown-toggle';
          } else {
            this.tierCode="T NF";
            this.tierButtonClass = 'btn-xs btn-gray dropdown-toggle';
          }
                   
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadSpecificTierObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );

    
  }

  isThisCodeSelected(determinedCode:string) {
    if (determinedCode===this.tierCode){
      return false;
    } else {
      return true;
    }
  }


}
