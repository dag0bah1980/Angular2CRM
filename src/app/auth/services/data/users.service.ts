import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CookieService } from 'angular2-cookie';

import { User } from '../../class/user';

import { AppSettings } from '../../../../config/AppSettings';

@Injectable()
export class UsersService {

  public data;
  user : User[];

  constructor(private _http: Http, private _cookieService:CookieService) { }

  getUsers():Observable<User[]> {
    return this._http.get(AppSettings.DATA_API_ENDPOINT+'/api/users')
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getSpecificUser(searchID: number):Observable<User[]> {
    console.log('GetSpecificUser');
    return this._http.get(AppSettings.DATA_API_ENDPOINT+'/api/users/'+searchID)
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  logicalDeleteUsers(deletedUser: User):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/users/delete/'+deletedUser.ID, deletedUser, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
  
  logicalUndeleteUser(deletedUser: User):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/users/undelete/'+deletedUser.ID, deletedUser, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }


  deactivateUser(deactivatedUser: User):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/users/deactivate/'+deactivatedUser.ID, deactivatedUser, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  activateUser(activatedUser: User):Observable<any>{
    //const body = JSON.stringify(deletedTag);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    putheaders.append('Content-Type', 'application/json');
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/users/activate/'+activatedUser.ID, activatedUser, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  updateUser(updatedUser: User):Observable<any>{
    console.log('BODY: ' + JSON.stringify(updatedUser));
    const putheaders = new Headers;
    putheaders.append('Content-Type', 'application/json');
    /*return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/users/update/'+updatedUser.ID, updatedUser, 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    */
    return this._http.put(AppSettings.DATA_API_ENDPOINT+'/api/users/update/'+updatedUser.ID, updatedUser,  {
          headers: putheaders
            }).map((response: Response) => {                
                console.log('response' + JSON.stringify(response.json()));                
                if (response.json().Meta.status === 'Fail')
                {                  
                  return false;
                }
                
                return true;                
            }); 
  }

  createUser(createdUser: User):Observable<boolean>{
    console.log('create User invoked');
    const postheaders = new Headers;
    postheaders.append('Content-Type', 'application/json');
    console.log(AppSettings.DATA_API_ENDPOINT+'/api/users');
    console.log(createdUser);
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

    return this._http.post(AppSettings.DATA_API_ENDPOINT+'/api/users', createdUser, {
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
