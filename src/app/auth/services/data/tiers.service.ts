import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CookieService } from 'angular2-cookie';

import { Tier } from '../../class/tier';

import { AppSettings } from '../../../../config/AppSettings';

@Injectable()
export class TiersService {

  public data;
  tier : Tier[];

  constructor(private _http: Http, private _cookieService:CookieService) { }

  getStatuses():Observable<Tier[]> {
    return this._http.get(AppSettings.DATA_API_ENDPOINT+'/api/tiers')
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getSpecificTier(searchID: number):Observable<Tier[]> {
    console.log('GetSpecificTier');
    return this._http.get(AppSettings.DATA_API_ENDPOINT+'/api/tiers/'+searchID)
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  logicalDeleteTier(deletedTier: Tier):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/tiers/delete/'+deletedTier.ID, deletedTier, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
  
  logicalUndeleteTier(deletedTier: Tier):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/tiers/undelete/'+deletedTier.ID, deletedTier, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }


  deactivateTier(deactivatedTier: Tier):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/tiers/deactivate/'+deactivatedTier.ID, deactivatedTier, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  activateTier(activatedTier: Tier):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/tiers/activate/'+activatedTier.ID, activatedTier, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  updateTier(updatedTier: Tier):Observable<any>{
    const putheaders = new Headers;
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/tiers/update/'+updatedTier.ID, updatedTier, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  createTier(createdTier: Tier):Observable<boolean>{
    console.log('create Tier invoked');
    const postheaders = new Headers;
    postheaders.append('Content-Type', 'application/json');
    console.log(AppSettings.DATA_API_ENDPOINT+'/api/tiers');
    console.log(createdTier);
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

    return this._http.post(AppSettings.DATA_API_ENDPOINT+'/api/tiers', createdTier, {
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
