import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CookieService } from 'angular2-cookie';

import { Currentuser } from '../../class/currentuser';

@Injectable()
export class CurrentusersService {

  public data;
  constructor(private _http: Http, private _cookieService:CookieService) { }

  getCurrentUsersData():Observable<Currentuser[]> {
    console.log('started getcurrentusersdata');
    this.data = this._http.get("http://lorico.redirectme.net:8888/api/currentusers")
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    console.log('DATA:' + JSON.stringify(this.data.value));
    return this.data;    
  }

  getCurrentUsersDataSample():Observable<Currentuser[]>{
    this.data = this._http.get("http://localhost:4201/app/auth/sampledata/currentusers.json")
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    console.log('DATA:' + JSON.stringify(this.data.value));
    return this.data;
  }

  getCurrentUsers(){
    return this._http.get('http://lorico.redirectme.net:8888/api/currentusers')
    .map((response: Response) => response.json())
    .map(body => body.Data);
  }
}

