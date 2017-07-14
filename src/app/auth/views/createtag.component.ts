import { Component, OnInit, Renderer2 } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../services/http.service';
import { TagsService } from '../services/data/tags.service';
import { TimedatePipe } from '../pipes/timedate.pipe';

import { CookieService } from 'angular2-cookie';

import { Subscription, Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { SelectItem } from 'primeng/primeng';


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
  createdTag: Tag; 

  private data;
  //errors is for form validation errors
  private errors;

  private errorMessage;
  private errorAction;
  private errorUser;
  private active;
  private statusMessage;
  private statusMessageEmpty;

  private output;
  private formCodeSub: any;

  //Example Fields:
  //exampleDate: Date;
  exampleWYSIWYG: string;

  cities: SelectItem[];

  exampleSelectedCity: string;
  
  

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, 
  private _tagService: TagsService, private _cookieService: CookieService, 
  private _router: Router, private _fb: FormBuilder) {
    this.dataForm = this._fb.group({
      IsActive: new FormControl(),
      IsDeleted: new FormControl(),
      Tag: new FormControl(),
      Description: new FormControl(),
      Created: new FormControl(),
      Modified: new FormControl()
    });

    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
   }

  ngOnInit() {
    let CodeValidationRegex = '[a-zA-Z0-9]{0,32}';

    this.dataForm = this._fb.group({
      'IsActive' : [true, Validators.required],
      'IsDeleted' : [false, Validators.required],
      'Tag': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
      'Description' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])],      
      /* 'exampleDate' : [null, Validators.required] */
      'exampleWYSIWYG': ['', Validators.required],
      'exampleSelectedCity': [null,Validators.required]
    });

    this.active = true;
    this.statusMessage = null;
    this.statusMessageEmpty = true;
    

    //testing for form changes.
    
    this.formCodeSub = this.dataForm.valueChanges.subscribe(data => {
      //console.log('Form changes', data)
      //console.log('Trying to get Tag value', data.Tag)
      if (this.statusMessageEmpty = true) {
        if(data.Tag!=this.TagValue) {
          this.statusMessage=null;
          this.statusMessageEmpty=true;        
        }
      }
      this.output = data;
    });

      console.log(this.exampleSelectedCity);
    
  }

  private TagLength: number = 0;
  getLength(formControlField: string): number {
    var length;
    if (this.dataForm.controls[formControlField] === null) {
      return 0;
    } 
    if (!this.dataForm.controls[formControlField].pristine){
      length = this.dataForm.controls[formControlField].value.length;
      return length;
    }
  }

  private TagValue: string = '';
  getValue(formControlField: string): string {
    var value;
    if (this.dataForm.controls[formControlField] === null) {
      return '';
    } 
    if (!this.dataForm.controls[formControlField].pristine){
      value = this.dataForm.controls[formControlField].value;
      return value;
    }
  }

  checkValidAndPristine(controlValue: string){
    if (!this.dataForm.controls[controlValue].valid && !this.dataForm.controls[controlValue].pristine) {
      return true;
    } else
    {
      return false;
    }
  }
 
  resetForm(){
    this.dataForm.reset();
    //console.log('Tag:' + JSON.stringify(this.updatedTag));

    let CodeValidationRegex = '[a-zA-Z0-9]{0,32}';
    this.dataForm = this._fb.group({
      'IsActive' : [true, Validators.required],
      'IsDeleted' : [false, Validators.required],
      'Tag': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
      'Description' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      /*'exampleDate' : [null, Validators.required]*/
      'exampleWYSIWYG': [null, Validators.required]
    });

    this.dataForm.controls['IsActive'].setValue(true);
    this.dataForm.controls['IsActive'].markAsPristine;

    this.dataForm.controls['IsDeleted'].setValue(false);
    this.dataForm.controls['IsDeleted'].markAsPristine;

    this.dataForm.controls['Tag'].setValue(null);
    this.dataForm.controls['Tag'].markAsPristine;

    this.dataForm.controls['Description'].setValue(null);
    this.dataForm.controls['Description'].markAsPristine;

    this.dataForm
  }

  onCancelClick(){
    //console.log('Clicked Cancel!');
    this.resetForm();  
  }

  navBackToList() {
    this._router.navigateByUrl('/auth/listtags');
  }
 
    onSubmit() {
      
      console.log('Clicked Submit');
      this.createdTag = new Tag(0, '', '', false, false, '','');

      this.createdTag.ISACTIVE = this.dataForm.controls['IsActive'].value;
      this.createdTag.ISDELETED = this.dataForm.controls['IsDeleted'].value;
      this.createdTag.TAG = this.dataForm.controls['Tag'].value;
      this.createdTag.DESCRIPTION = this.dataForm.controls['Description'].value;

      var TagValue;
      this.TagValue = this.createdTag.TAG;

      
      //console.log(this.createdTag);
      console.log(this.statusMessage + ':' + this.statusMessageEmpty);
      this._tagService.createTag(this.createdTag)
        .subscribe(result => {          
          if (result == true) {                       
            this.statusMessage = 'SUCCESS';
            this.statusMessageEmpty = false;            
          }
          else {
            this.statusMessage = 'FAIL';
            this.statusMessageEmpty = false;                      
          }
        });
    }

    public source;
    public length;
    public editortext;



    public onTextChange($event): void {
      //refer to this page to add class on class ui-editor-container:
      //https://stackoverflow.com/questions/38944725/how-to-get-dom-element-in-angular-2
      //this.source = $event.source;
      //this.length = $event.textValue.length;
      //this.editortext = $event.textValue;
      
       let myExampleEditor = document.querySelector(".ui-editor-container");

      if($event.textValue.length>1){
        console.log('has some text');
        myExampleEditor.classList.remove("ng-invalid");

      } else {
        console.log('NO TEXT');
        myExampleEditor.classList.add("ng-invalid");
      }
      
    }

    public onInit($event): void {
      //refer to this page to add class on class ui-editor-container:
      //https://stackoverflow.com/questions/38944725/how-to-get-dom-element-in-angular-2
      //this.source = $event.source;
      //this.length = $event.textValue.length;
      //this.editortext = $event.textValue;
      
      let myExampleEditor = document.querySelector(".ui-editor-container");

      if($event.textValue==null){
        console.log(myExampleEditor);
        myExampleEditor.classList.add("ng-invalid");
        console.log(myExampleEditor);
      } else {
        myExampleEditor.classList.remove("ng-invalid");
      }
      
    }

    
    public onChange($event): void {
      //let myExampleDropDown = document.querySelector(".ui-dropdown");
      //myExampleDropDown.classList.add("ng-invalid");
      console.log($event.value);
    }
}
