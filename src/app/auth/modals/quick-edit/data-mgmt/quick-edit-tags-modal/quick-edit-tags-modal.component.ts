import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { TagsService } from '../../../../services/data/tags.service';
import { CookieService } from 'angular2-cookie';
import { Observable } from 'rxjs/Rx';
import { Tag } from '../../../../class/tag';

@Component({
  selector: 'ang2-crm-quick-edit-tags-modal',
  templateUrl: './quick-edit-tags-modal.component.html',
  styleUrls: ['./quick-edit-tags-modal.component.css'],
  providers: [ TagsService ]
})
export class QuickEditTagsModalComponent implements OnInit {

  @Input() i_DataID: number;
  @Input() i_DataTAG: string;

  private ID: number;

  private formTAG: string;
  private formISACTIVE: boolean;
  private formISDELETED: boolean;
  private formDESCRIPTION: string;
  private formCREATED: string;
  private formMODIFIED: string;

  private data;

  private errorMessage;
  private errorAction;
  private errorUser;

  constructor(private _http: Http, private _tagsservice: TagsService, private _cookieService: CookieService) { }

  ngOnInit() {
    if(this.i_DataID!=undefined){
      console.log('DEFINED!');
      this.loadSpecificTagsObservable(this.i_DataID, this.i_DataTAG);
    } else {
      console.log('unDEFINED!');
    }
  }

  loadSpecificTagsObservable(ID: number, CODE: string){
    console.log('ID:'+ID+',CODE:'+CODE);
    this._tagsservice.getSpecificTag(ID,CODE).subscribe(
        data => {
          setTimeout(()=> {
            this.data = data;        
            //console.log();    
            this.formDESCRIPTION = this.data.DESCRIPTION;
            this.formCREATED = this.data.CREATED;
            console.log(this.data.CREATED);
          }, 1000); 
        },
        error =>  { 
          this.errorMessage = error;
          this.errorAction = "";
          this.errorUser = this._cookieService.get('USER');
          document.getElementById("openModalErrorMessageButton").click();
        }
      );
  }
}
