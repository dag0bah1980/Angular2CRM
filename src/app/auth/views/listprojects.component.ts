import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { ActivestatuslabelComponent } from '../widgets/activestatuslabel/activestatuslabel.component';

import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-listprojects',
  templateUrl: './listprojects.component.html',
  styleUrls: ['./listprojects.component.css']
})
export class ListprojectsComponent implements OnInit {

  public sortBy = "MODIFIED";
  public sortOrder = "desc";
  public filterQuery = "";
  public rowsOnPage = 5;
  public data;
  public refreshTime;

  constructor(private _http: Http, private _cookieService: CookieService) { }

  ngOnInit() {
    this.loadProjectsObservableFromFile();
    Observable.interval(50000).subscribe(x => {
      this.loadProjectsObservableFromFile();
      this.refreshTime = new Date();
    });
  }

  loadProjectsObservableFromFile(){
  //this._http.get("app/auth/sampledata/projects.json").subscribe(
  this._http.get("app/auth/sampledata/projects.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
  }
}
