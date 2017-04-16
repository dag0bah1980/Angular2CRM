//From: http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { CookieService } from 'angular2-cookie';

import { Cred } from '../auth/class/cred';
 
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http, private _cookieService:CookieService) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    login(cred): Observable<boolean> {
        const body = JSON.stringify(cred);
    
        this._cookieService.put('USER', cred.username);
        const postheaders = new Headers;
        postheaders.append('Content-Type', 'application/json');

        //original: return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        return this.http.post('http://lorico.redirectme.net:8888/auth/login', body, {
          headers: postheaders
            }).map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    // original: localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    this._cookieService.put('cookietest','cookievalue');
                    this._cookieService.put('token',  response.json().Meta.jwttoken);
                    this._cookieService.put('appversion', response.json().Meta.appversion);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
