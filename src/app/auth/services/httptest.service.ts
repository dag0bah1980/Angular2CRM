import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttptestService {

  constructor(private http: Http) { }

  getAllTestData() {
    return this.http.get('http://lorico.redirectme.net:8888/api/Test/1/4000')
    .map((response: Response) => response.json())
    .map(body => body.Data);
  }
}  
