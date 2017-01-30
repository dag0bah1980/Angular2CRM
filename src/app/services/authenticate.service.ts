import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {

  userLoggedIn : boolean;

  attemptLogin(): Promise<boolean> {
    this.userLoggedIn=true;    
    return Promise.resolve(this.userLoggedIn);
  }
  
  attemptLogin2(value): Promise<boolean> {
    console.log('value: ' + value);

    this.userLoggedIn=true;    
    return Promise.resolve(this.userLoggedIn);
  }

  constructor() { }

}
