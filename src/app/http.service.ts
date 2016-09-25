import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
}
