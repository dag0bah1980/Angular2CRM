// Standard Angular Stuff...
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//import { HttpService } from '../services/http.service';

// Service for formatting date / time
import { TimedatePipe } from '../pipes/timedate.pipe';

// Service for getting details of Cookies.
import { CookieService } from 'angular2-cookie';

// Third party imports
import { Subscription, Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { SelectItem } from 'primeng/primeng';

// Class and Data Service for Class
import { Tag } from '../class/tag';
import { TagsService } from '../services/data/tags.service';


@Component({
  selector: 'ang2-crm-edittag',
  templateUrl: './edittag.component.html',
  styleUrls: ['./edittag.component.css'],
  providers: [TagsService]
})
export class EdittagComponent implements OnDestroy {

  private subscription: Subscription;
  id: number;
  activeTag: Tag;

  // Fields that are mapped to elements of the class: Tag
  IsActive: boolean;
  IsDeleted: boolean;
  Tag: string;
  Description: string;
  Created: string;
  Modified: string;

  // Name of the form I'm using to update a tag
  dataForm: FormGroup;

  // Tag instance used when updating a Tag
  updatedTag: Tag;

  // ???
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

  // Example Fields:
  //exampleDate: Date;
  //exampleWYSIWYG: string;

  // The following are for dropdowns:
  //cities: SelectItem[];
  //exampleSelectedCity: string;

   // Constructor.
  constructor(private activatedRoute: ActivatedRoute, 
  private _router: Router, private _tagService: TagsService,
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

    //Example for Dropdown Field
    /*
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
    */
   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  ngOnInit() {

    // Code Validation Regular Express (Only 32 characters, with only letters (lower / upper) and numbers allowed)
    let CodeValidationRegex = '[a-zA-Z0-9]{0,32}';

    // Initialize Form Group with default settings. Example Fields have been commented out.
    this.dataForm = this._fb.group({
      'IsActive': [true, Validators.required],
      'IsDeleted': [false, Validators.required],
      'Tag': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
      'Description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(512)])],
      /* 'exampleDate' : [null, Validators.required] */
      /* 'exampleWYSIWYG': ['', Validators.required], */
      /* 'exampleSelectedCity': [null,Validators.required] */
    });
    
    this.active = true;
    this.statusMessage = null;
    this.statusMessageEmpty = true;

    // Get Tag to edit via ID
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

  // Length of Tag field  
  private TagLength: number = 0;

  // Function to get the Length of Tag Field
  getLength(formControlField: string): number {
    var length;
    if (this.dataForm.controls[formControlField] === null) {
      return 0;
    }
    if (!this.dataForm.controls[formControlField].pristine) {
      length = this.dataForm.controls[formControlField].value.length;
      return length;
    }
  }

  // Tag value
  private TagValue: string = '';

  // Function to get the value of Tag field
  getValue(formControlField: string): string {
    var value;
    if (this.dataForm.controls[formControlField] === null) {
      return '';
    }
    if (!this.dataForm.controls[formControlField].pristine) {
      value = this.dataForm.controls[formControlField].value;
      return value;
    }
  }

  // Function to find out if a control is valid AND pristine
  checkValidAndPristine(controlValue: string) {
    if (!this.dataForm.controls[controlValue].valid && !this.dataForm.controls[controlValue].pristine) {
      return true;
    } else {
      return false;
    }
  }

  // Function to get the form to reset to default values
  resetForm() {
    this.dataForm.reset();
    //console.log('Tag:' + JSON.stringify(this.updatedTag));

    let CodeValidationRegex = '[a-zA-Z0-9]{0,32}';
    this.dataForm = this._fb.group({
      'IsActive': [true, Validators.required],
      'IsDeleted': [false, Validators.required],
      'Tag': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
      'Description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      /* 'exampleDate' : [null, Validators.required]*/
      /* 'exampleWYSIWYG': [null, Validators.required]*/
      /* 'exampleSelectedCity': [null,Validators.required] */
    });

    this.dataForm.controls['IsActive'].setValue(this.updatedTag.ISACTIVE);
    this.dataForm.controls['IsActive'].markAsPristine;

    this.dataForm.controls['IsDeleted'].setValue(this.updatedTag.ISDELETED);
    this.dataForm.controls['IsDeleted'].markAsPristine;

    this.dataForm.controls['Tag'].setValue(this.updatedTag.TAG);
    this.dataForm.controls['Tag'].markAsPristine;

    this.dataForm.controls['Description'].setValue(this.updatedTag.DESCRIPTION);
    this.dataForm.controls['Description'].markAsPristine;

    //this.dataForm
  }

  // Function used when clicking cancel button to reset the form.
  onCancelClick() {
    //console.log('Clicked Cancel!');
    this.resetForm();
  }

  // Function used when clicking button Go Back To List to navigate back to the list Tags view
  navBackToList() {
    this._router.navigateByUrl('/auth/listtags');
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
    this._tagService.updateTag(this.updatedTag);

  }

  // Fields used by PrimeNG functions to get details of these components.
  //private source;
  //private length;
  //private editortext;

  
  // Default length of html in WYSIWYG Editor for description
  private DescriptionLength = 0;


  // Function for WYSIWYG Editor to detect change in contents and then show validation error if not passed.
  private onTextChange($event): void {
    //refer to this page to add class on class ui-editor-container:
    //https://stackoverflow.com/questions/38944725/how-to-get-dom-element-in-angular-2
    //this.source = $event.source;
    //this.length = $event.textValue.length;
    //this.editortext = $event.textValue;

    let myExampleEditor = document.querySelector(".ui-editor-container");

    if ($event.textValue.length > 1) {
      //console.log('has some text');
      myExampleEditor.classList.remove("ng-invalid");
      this.DescriptionLength = $event.htmlValue.length;
    } else {
      //console.log('NO TEXT');
      this.DescriptionLength = 0;
      myExampleEditor.classList.add("ng-invalid");
    }

  }

  // Function to check when the WYSIWYG Editor has been initialized, to show validation error if not passed.
  private onInit($event): void {
    //refer to this page to add class on class ui-editor-container:
    //https://stackoverflow.com/questions/38944725/how-to-get-dom-element-in-angular-2
    //this.source = $event.source;
    //this.length = $event.textValue.length;
    //this.editortext = $event.textValue;

    let myExampleEditor = document.querySelector(".ui-editor-container");

    if ($event.textValue == null) {
      myExampleEditor.classList.add("ng-invalid");
      this.DescriptionLength = 0;
    } else {
      myExampleEditor.classList.remove("ng-invalid");
      this.DescriptionLength = $event.htmlValue.length;
    }

  }

  // Function to check when the dropdown has been changed, to show validation error if not passed.  
  private onChange($event): void {
    let myExampleDropDown = document.querySelector(".ui-dropdown");

    if ($event.value == null) {
      myExampleDropDown.classList.add("ng-invalid");
    } else {
      myExampleDropDown.classList.remove("ng-invalid");
    }
  }

}
