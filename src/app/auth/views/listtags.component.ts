import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { TagsService } from '../services/data/tags.service';

import { Tag } from '../class/tag';
import { Observable } from 'rxjs/Rx';

import { ActivestatuslabelComponent } from '../widgets/activestatuslabel/activestatuslabel.component';

@Component({
  selector: 'ang2-crm-listtags',
  templateUrl: './listtags.component.html',
  styleUrls: ['./listtags.component.css'],
  providers: [ TagsService ]
})
export class ListtagsComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 25;
  public sortBy = "LOGINTIME";
  public sortOrder = "desc";
  
  refreshTime: Date;

  tags : Tag[];
  
  constructor(private _http: Http, private _tagsservice: TagsService) { 
    
  }

  ngOnInit() {
    this.loadTagsObservable();
    
    Observable.interval(30000).subscribe(x => {
      this.loadTagsObservable();
      this.refreshTime = new Date();
    });
  }

  loadTagsObservable(){
  this._tagsservice.getTags().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      }
    );
  }

  logicalDeleteTag(id){
    console.log('clicked logical delete id:'+id);
  }

  deactivateTag(id){
    console.log('clicked deactivate id:'+id);
  }
}
