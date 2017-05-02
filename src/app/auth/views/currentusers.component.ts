import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { CurrentusersService } from '../services/data/currentusers.service';

import { Currentuser } from '../class/currentuser';

@Component({
  selector: 'ang2-crm-currentusers',
  templateUrl: './currentusers.component.html',
  styleUrls: ['./currentusers.component.css'],
  providers: [ CurrentusersService ]

  
})
export class CurrentusersComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "username";
  public sortOrder = "asc";

  currentusers : Currentuser[];


  constructor(private _http: Http, private _currentusersservice: CurrentusersService) { }

  ngOnInit() {
    //this._currentusersservice.getCurrentUsersData();
    //this._currentusersservice.getCurrentUsersDataSample();

    //this loadCurrentUsersStatic works!
    //this.loadCurrentUsersStatic();
    
    //this.loadCurrentUsers();
    this.loadCurrentUsersNonObservable();
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

  loadCurrentUsers(){
    this._currentusersservice.getCurrentUsersData()
      .subscribe(currentusers => { this.currentusers = currentusers; console.log('did this work'); },
      err => {
        // Log errors if any
        console.log(err);
      });      
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
