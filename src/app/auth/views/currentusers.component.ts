import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'ang2-crm-currentusers',
  templateUrl: './currentusers.component.html',
  styleUrls: ['./currentusers.component.css']
})
export class CurrentusersComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "username";
  public sortOrder = "asc";

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get("app/auth/sampledata/currentusers.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                    console.log('getting data');
                }, 1000);
            },);
  }

}
