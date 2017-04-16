import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
 
import { AuthenticationService } from '../../services/authentication.service';
import { Cred } from '../class/cred';

@Component({
  selector: 'ang2-crm-jwttest',
  templateUrl: './jwttest.component.html',
  styleUrls: ['./jwttest.component.css']
})
export class JwttestComponent implements OnInit {

  constructor(private _http: Http,
        private authenticationService: AuthenticationService) {
    
  }

  ngOnInit() {
  }

  //getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        //let options = new RequestOptions({ headers: headers });
 
        // get users from api
        //return this.http.get('/api/users', options)
        //    .map((response: Response) => response.json());
    //}
  
  onClickSendToConsole() {
    console.log('clicked!');
  }

  onClickJWT() {
    //var jwt = require('jsonwebtoken');
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    //backdate a jwt 30 seconds
    //var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');

    // sign with RSA SHA256
    //var cert = fs.readFileSync('private.key');  // get private key
    //var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});

    //jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(err, token) {
    //  console.log(token);
    //});
  }
}
