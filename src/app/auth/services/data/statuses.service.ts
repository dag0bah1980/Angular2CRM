import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CookieService } from 'angular2-cookie';

import { Status } from '../../class/status';

import { AppSettings } from '../../../../config/AppSettings';

@Injectable()
export class StatusesService {

  public data;
  tag : Status[];

  constructor(private _http: Http, private _cookieService:CookieService) { }

  getStatuses():Observable<Status[]> {
    return this._http.get(AppSettings.DATA_API_ENDPOINT+'/api/statuses')
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getSpecificStatus(searchID: number):Observable<Status[]> {
    console.log('GetSpecificStatus');
    return this._http.get(AppSettings.DATA_API_ENDPOINT+'/api/statuses/'+searchID)
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  logicalDeleteStatus(deletedStatus: Status):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/statuses/delete/'+deletedStatus.ID, deletedStatus, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
  
  logicalUndeleteStatus(deletedStatus: Status):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/statuses/undelete/'+deletedStatus.ID, deletedStatus, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }


  deactivateStatus(deactivatedStatus: Status):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/statuses/deactivate/'+deactivatedStatus.ID, deactivatedStatus, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  activateStatus(activatedStatus: Status):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/statuses/activate/'+activatedStatus.ID, activatedStatus, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  updateStatus(updatedStatus: Status):Observable<any>{
    const putheaders = new Headers;
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/statuses/update/'+updatedStatus.ID, updatedStatus, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  createStatus(createdStatus: Status):Observable<boolean>{
    console.log('create status invoked');
    const postheaders = new Headers;
    postheaders.append('Content-Type', 'application/json');
    console.log(AppSettings.DATA_API_ENDPOINT+'/api/statuses');
    console.log(createdStatus);
    /*return this.http.post('http://lorico.redirectme.net:8888/auth/login', JSON.stringify({ username: _username, password: _password }), {
          headers: postheaders
            }).map((response: Response) => {
                // login successful if there's a jwt token in the response                
                let token = response.json() && response.json().Meta.jwttoken;
                console.log('first part of TOKEN: ' + response);
                console.log('Returned JWTOKEN: ' + response.json().Meta.jwttoken);
                console.log('SUCCESS STATUS: '+ response.json().Data[0].SUCCESS);
                if (token && response.json().Data[0].SUCCESS) {
                    // set token property
                    this.token = response.json().Meta.jwttoken;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    // original: localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    this._cookieService.put('cookietest','cookievalue');
                    this._cookieService.put('token',  response.json().Meta.jwttoken);
                    this._cookieService.put('appversion', response.json().Meta.appversion);
                    this._cookieService.put('sessionkey', response.json().Meta.message);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }                
            });
    */      

    return this._http.post(AppSettings.DATA_API_ENDPOINT+'/api/statuses', createdStatus, {
          headers: postheaders
            }).map((response: Response) => {                
                console.log('response' + JSON.stringify(response.json()));                
                if (response.json().Meta.status === 'Fail')
                {                  
                  return false;
                }
                
                return true;
                /*
                if (response.json().Data[0].SUCCESS) {
                    console.log('Returned JWTOKEN: ' + response.json().Meta.jwttoken);
                    console.log('SUCCESS STATUS: '+ response.json().Data[0].SUCCESS);
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }                
                */
            });    
    //.response.json())
    //.map(body => body.Data)
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
  

}
