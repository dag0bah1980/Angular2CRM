import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('http://lorico.redirectme.net:8888/api/SystemMaintenance/GetHardDriveInfo')
    .map((response: Response) => response.json())
    .map(body => body.Data)
    .map(data => data[0].AvailableSpace);
  }
  
  sendData(tag: any) {
    const body = JSON.stringify(tag);
    console.log(body);
    const postheaders = new Headers;
    postheaders.append('Content-Type', 'application/json');
    return this.http.post('http://lorico.redirectme.net:8888/api/Tags', body, {
      headers: postheaders
    })
      .map((data: Response) => data.json());
  }

  sendCredentials(cred: any) {
    const body = JSON.stringify(cred);
    console.log(body);
    const postheaders = new Headers;
    postheaders.append('Content-Type', 'application/json');
    return this.http.post('http://lorico.redirectme.net:8888/auth/login', body, {
      headers: postheaders
    })
      .map((data: Response) => data.json());
  }

  getTagData() {
    return this.http.get('http://lorico.redirectme.net:8888/api/Tags/10026')
    .map((response: Response) => response.json())
    .map(body => body.Data);
    //.map(data => data[0].Tag);
  }

  getTagData2() {
    return this.http.get('http://lorico.redirectme.net:8888/api/Tags/10026')
    .map((response: Response) => response.json());
  }

  getAllTags() {
    return this.http.get('http://lorico.redirectme.net:8888/api/Tags')
    .map((response: Response) => response.json())
    .map(body => body.Data);
  }
  
}
