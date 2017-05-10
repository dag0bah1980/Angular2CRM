import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CookieService } from 'angular2-cookie';

import { Tag } from '../../class/tag';

@Injectable()
export class TagsService {

  public data;
  tag : Tag[];

  constructor(private _http: Http, private _cookieService:CookieService) { }

  getTags():Observable<Tag[]> {
    return this._http.get('http://lorico.redirectme.net:8888/api/tags')
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  logicalDeleteTag(id){
    //const body = JSON.stringify(currentuser);    
    //console.log('BODY: ' + body);
    const putheaders = new Headers;
    
    putheaders.append('Content-Type', 'application/json');
    return this._http.put('http://lorico.redirectme.net:8888/api/tag/'+id, '', 
    { headers:  putheaders })
    .map((response: Response) =>  response.json())
    .map(body => body.Data)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
