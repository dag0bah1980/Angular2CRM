import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpapiService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('http://lorico.redirectme.net:8888/api/users')
      .map((response: Response) => response.json());
  }
}
