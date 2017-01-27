import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  //original login()
  login(): Observable<boolean> {
    this.isLoggedIn = true;
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }
  
  
  login2(): Promise<boolean> {
    this.isLoggedIn = true;
    return Promise.resolve(this.isLoggedIn);
  }
  

  logout(): void {
    console.log('Logging out');
    this.isLoggedIn = false;
  }
}