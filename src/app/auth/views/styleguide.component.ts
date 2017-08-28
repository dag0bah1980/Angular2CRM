import { Component, OnInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'ang2-crm-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.css']
})
export class StyleguideComponent implements OnInit {

  
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  // const URL = '/api/';
  URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

  public uploader:FileUploader = new FileUploader({url: this.URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
