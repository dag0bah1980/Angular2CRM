import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'ang2-crm-jwttest',
  templateUrl: './jwttest.component.html',
  styleUrls: ['./jwttest.component.css']
})
export class JwttestComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }

  
  
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
