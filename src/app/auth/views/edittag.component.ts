import { Component, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../services/http.service';
import { TagsService } from '../services/data/tags.service';
import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';

import { Subscription } from 'rxjs/Rx';

import { Tag } from '../class/tag';

@Component({
  selector: 'ang2-crm-edittag',
  templateUrl: './edittag.component.html',
  styleUrls: ['./edittag.component.css'],
  providers: [HttpService, TagsService]
})
export class EdittagComponent implements OnDestroy {

  private subscription: Subscription;
  id: number;
  activeTag: Tag;  

  IsActive: boolean;
  IsDeleted: boolean;
  Tag: string;
  Description: string;
  Created: string;
  Modified: string;
  
  updatedTag: Tag;
  dataForm: FormGroup;

  

  private data;
  //errors is for form validation errors
  private errors;

  private errorMessage;
  private errorAction;
  private errorUser;
  private active;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private _tagService: TagsService,
  private _cookieService: CookieService, private _fb: FormBuilder,) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
    this.dataForm = this._fb.group({
      IsActive: new FormControl(),
      IsDeleted: new FormControl(),
      Tag: new FormControl(),
      Description: new FormControl(),
      Created: new FormControl(),
      Modified: new FormControl()
    });
   }

  ngOnInit() {

    let CodeValidationRegex = '[a-zA-Z0-9]{0,32}';

    this.dataForm = this._fb.group({
      'IsActive' : [null, Validators.required],
      'IsDeleted' : [null, Validators.required],
      'Tag': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
      'Description' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      'Created' : [null, Validators.required],
      'Modified' : [null, Validators.required]
    });
    
    this._tagService.getSpecificTag(this.id).subscribe(
      data => {
        setTimeout(()=> {
          
          this.data = data;           
       
          this.IsActive = data[0].ISACTIVE;
          this.IsDeleted = data[0].ISDELETED;
          this.Tag = data[0].TAG;
          this.Description = data[0].DESCRIPTION;
          this.Created = data[0].CREATED;
          this.Modified = data[0].MODIFIED;

          this.dataForm.controls['IsActive'].setValue(data[0].ISACTIVE);          
          this.dataForm.controls['IsDeleted'].setValue(data[0].ISDELETED); 
          this.dataForm.controls['Tag'].setValue(data[0].TAG);
          this.dataForm.controls['Description'].setValue(data[0].DESCRIPTION);
          this.dataForm.controls['Created'].setValue(data[0].CREATED);
          this.dataForm.controls['Modified'].setValue(data[0].MODIFIED);
          this.active = true;

          this.updatedTag = new Tag(this.id, data[0].CREATED, data[0].MODIFIED, data[0].ISACTIVE, data[0].ISDELETED, data[0].TAG, data[0].DESCRIPTION);
        }, 1000); 
      },
      APIerror =>  { 
        this.errorMessage = APIerror;
        this.errorAction = "loadTagsObservable";
        this.errorUser = this._cookieService.get('USER');
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
    
    
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  onUpdateSubmit(){
    console.log('Updated!');
    //console.log('Submitted:' + this.IsActive + this.dataForm.controls['Tag'].pristine);
    //console.log('Submitted:' + this.Description);
    //this._tagService.updateTag()
    if (!this.dataForm.controls['IsActive'].pristine) {
      this.updatedTag.ISACTIVE = this.dataForm.controls['IsActive'].value;
    }

    if (!this.dataForm.controls['IsDeleted'].pristine) {
      this.updatedTag.ISDELETED = this.dataForm.controls['IsDeleted'].value;
    }
    
    if (!this.dataForm.controls['Tag'].pristine) {
      this.updatedTag.TAG = this.dataForm.controls['Tag'].value;
    }

    if (!this.dataForm.controls['Description'].pristine) {
      this.updatedTag.DESCRIPTION = this.dataForm.controls['Description'].value;
    }

    console.log('Tag:' + JSON.stringify(this.updatedTag));


  }

  onCancelClick(){
    console.log('Clicked Cancel!');

    this.dataForm.reset();
    //console.log('Tag:' + JSON.stringify(this.updatedTag));
    this.dataForm = this._fb.group({
      IsActive: new FormControl(),
      IsDeleted: new FormControl(),
      Tag: new FormControl(),
      Description: new FormControl(),
      Created: new FormControl(),
      Modified: new FormControl()
    });

    this.dataForm.controls['IsActive'].setValue(this.updatedTag.ISACTIVE);
    this.dataForm.controls['IsActive'].markAsPristine;

    this.dataForm.controls['IsDeleted'].setValue(this.updatedTag.ISDELETED);
    this.dataForm.controls['IsDeleted'].markAsPristine;

    this.dataForm.controls['Tag'].setValue(this.updatedTag.TAG);
    this.dataForm.controls['Tag'].markAsPristine;

    this.dataForm.controls['Description'].setValue(this.updatedTag.DESCRIPTION);
    this.dataForm.controls['Description'].markAsPristine;
    
    let _timedatePipe = new TimedatePipe();
    this.dataForm.controls['Created'].setValue(_timedatePipe.transform(this.updatedTag.CREATED,'medium'));
    this.dataForm.controls['Created'].markAsPristine;

    this.dataForm.controls['Modified'].setValue(_timedatePipe.transform(this.updatedTag.MODIFIED,'medium'));
    this.dataForm.controls['Modified'].markAsPristine;
  }

}
