import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { CurrentusersService } from '../services/data/currentusers.service';

import { Currentuser } from '../class/currentuser';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'ang2-crm-currentusers',
  templateUrl: './currentusers.component.html',
  styleUrls: ['./currentusers.component.css'],
  providers: [ CurrentusersService ]

  
})
export class CurrentusersComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 25;
  public sortBy = "LOGINTIME";
  public sortOrder = "desc";
  
  refreshTime: Date;

  currentusers : Currentuser[];


  constructor(private _http: Http, private _currentusersservice: CurrentusersService) { }

  ngOnInit() {
    //this loadCurrentUsersStatic works!
    //this.loadCurrentUsersStatic();
    
    //this loadCurrentUsersNonObservable works!
    //this.loadCurrentUsersNonObservable();

    Observable.interval(5000).subscribe(x => {
      this.loadCurrentUsersObservable();
      this.refreshTime = new Date();
    });
    
  }

  loadCurrentUsersStatic(){
    this._http.get("app/auth/sampledata/currentusers.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                    console.log('getting data');
               }, 1000);
            },);
  }


  loadCurrentUsersObservable(){
  this._currentusersservice.getCurrentUsersData().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      }
    );
  }

  loadCurrentUsersNonObservable(){
  this._currentusersservice.getCurrentUsers().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log(data);    
        }, 1000); 
      }
    );
  }
}
