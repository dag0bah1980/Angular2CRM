import { Component, OnInit } from '@angular/core';
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
  selector: 'ang2-crm-createtag',
  templateUrl: './createtag.component.html',
  styleUrls: ['./createtag.component.css'],
  providers: [HttpService, TagsService]
})
export class CreatetagComponent implements OnInit {

  private subscription: Subscription;
  id: number;
  activeTag: Tag;  

  IsActive: boolean;
  IsDeleted: boolean;
  Tag: string;
  Description: string;
  Created: string;
  Modified: string;
  
  dataForm: FormGroup;

  

  private data;
  //errors is for form validation errors
  private errors;

  private errorMessage;
  private errorAction;
  private errorUser;
  private active;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private _tagService: TagsService,
  private _cookieService: CookieService, private _fb: FormBuilder) {
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

    this.active = true;
  }


 
}
