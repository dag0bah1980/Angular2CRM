import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthenticaterService {

  constructor(private http: Http) { }

  validateBoolean: boolean;

  sendCredentials(cred: any) {
    const body = JSON.stringify(cred);
    console.log('Authenticater sendCredentials: ' + body);
    const postheaders = new Headers;
    postheaders.append('Content-Type', 'application/json');
    return this.http.post('http://lorico.redirectme.net:8888/auth/login', body, {
      headers: postheaders
    })
      .map((data: Response) => data.json());
  }

  validateCredentials(value: any) {

    this.sendCredentials(value).subscribe(
      data => { 
        console.log('Success: ' + data.Data[0].SUCCESS );
        this.validateBoolean = data.Data[0].SUCCESS;
        
      },
      error => { 
        console.log('Error: ' + <any>error);
        this.validateBoolean = false;
      },
      () => {}
    );    
    
  }
}
