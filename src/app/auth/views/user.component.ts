// Standard Angular Stuff...
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
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
import { User } from '../class/user';
import { UsersService } from '../services/data/users.service';

import { AppSettings } from '../../../config/AppSettings';

import {Message} from 'primeng/primeng';

@Component({
  selector: 'ang2-crm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})
export class UserComponent implements OnInit {

  private subscription: Subscription;
  id: number;
  activeUser: User;

  
  // Fields that are mapped to elements of the class: User
  IsActive: boolean;
  IsDeleted: boolean;
  Created: string;
  Modified: string;
  Username : string;
  Fname : string;
  Lname : string; 
  Pword : string; 


  // Name of the form I'm using to create a User
  dataForm: FormGroup;

  // User instance used when creating a User
  createdUser: User;

  // User instance used when updating a User
  updatedUser: User;

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

  private title: string;
  // Example Fields:
  //exampleDate: Date;
  //exampleWYSIWYG: string;

  // The following are for dropdowns:
  //cities: SelectItem[];
  //exampleSelectedCity: string;


  // Constructor.
  constructor(private activatedRoute: ActivatedRoute,
    private _userService: UsersService, private _cookieService: CookieService,
    private _router: Router, private _fb: FormBuilder) {
    this.dataForm = this._fb.group({
      IsActive: new FormControl(),
      IsDeleted: new FormControl(),
      Username: new FormControl(),
      Pword: new FormControl(),
      Created: new FormControl(),
      Modified: new FormControl(),
      Fname: new FormControl(),
      Lname: new FormControl()
    });
  }

  
  ngOnDestroy() {
    //commenting as I was getting errors while navigating through this screen.
    //this.subscription.unsubscribe();
    this.sub.unsubscribe();
  }
  private sub: any;
  
  //action is either create or edit.
  private action: string;
  
  private editid: number;

  ngOnInit() {
     this.sub = this.activatedRoute.params.subscribe(params => {
       this.editid = +params['editid'];
       console.log(this.action + this.editid);
       if (this.editid) {
         this.title = 'Edit User' + this.editid;
         this.action = 'edit';
       } else {
         this.title = 'Create a New User';
         this.action = 'create';
       }
      }
    );

    // Code Validation Regular Express (Only 32 characters, with only letters (lower / upper) and numbers allowed)
    let CodeValidationRegex = '[a-zA-Z0-9]{0,32}';


    if (this.action=='edit') {
      // Get User to edit via ID
      this._userService.getSpecificUser(this.editid).subscribe(
        data => {
          setTimeout(()=> {
            
            this.data = data;           
        
            this.IsActive = data[0].ISACTIVE;
            this.IsDeleted = data[0].ISDELETED;
            this.Username = data[0].USERNAME;
            this.Pword = data[0].PWORD;
            this.Fname = data[0].FNAME;
            this.Lname = data[0].LNAME;
            this.Created = data[0].CREATED;
            this.Modified = data[0].MODIFIED;

            this.dataForm.controls['IsActive'].setValue(data[0].ISACTIVE);          
            this.dataForm.controls['IsDeleted'].setValue(data[0].ISDELETED); 
            this.dataForm.controls['Username'].setValue(data[0].USERNAME);
            this.dataForm.controls['Pword'].setValue(data[0].PWORD);
            this.dataForm.controls['Fname'].setValue(data[0].FNAME);
            this.dataForm.controls['Lname'].setValue(data[0].LNAME);
            this.dataForm.controls['Created'].setValue(data[0].CREATED);
            this.dataForm.controls['Modified'].setValue(data[0].MODIFIED);
            this.active = true;

            this.updatedUser = new User(this.editid, data[0].CREATED, data[0].MODIFIED, data[0].ISACTIVE, data[0].ISDELETED, data[0].USERNAME, data[0].FNAME, data[0].LNAME, data[0].PWORD);
          }, 1000); 
        },
        APIerror =>  { 
          this.errorMessage = APIerror;
          this.errorAction = "loadUsersObservable";
          this.errorUser = this._cookieService.get('USER');
          document.getElementById("openModalErrorMessageButton").click();
        }
      );
    } else if (this.action=='create'){
      // Initialize Form Group with default settings to Create. Example Fields have been commented out.
    this.dataForm = this._fb.group({
      'IsActive': [true, Validators.required],
      'IsDeleted': [false, Validators.required],
      'Username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
      'Pword': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],      
      'Fname': [null, Validators.required],
      'Lname': [null, Validators.required]
    });


    }
    
    this.active = true;
    this.statusMessage = null;
    this.statusMessageEmpty = true;


    // testing for form changes.
    this.formCodeSub = this.dataForm.valueChanges.subscribe(data => {
      //console.log('Form changes', data)
      //console.log('Trying to get Tag value', data.Tag)
      if (this.statusMessageEmpty = true) {
        if (data.Username != this.UsernameValue) {
          this.statusMessage = null;
          this.statusMessageEmpty = true;
        }
      }
      this.output = data;
    });
  }

  // Length of Username field
  private UsernameLength: number = 0;

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

  // Username value
  private UsernameValue: string = '';

  // Function to get the value of Username field
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

    if (this.action=='create') {
    this.dataForm = this._fb.group({
      'IsActive': [true, Validators.required],
      'IsDeleted': [false, Validators.required],
      'Username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
      'Pword': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],      
      'Fname': [null, Validators.required],
      'Lname': [null, Validators.required]
    });

    this.dataForm.controls['IsActive'].setValue(true);
    this.dataForm.controls['IsActive'].markAsPristine;

    this.dataForm.controls['IsDeleted'].setValue(false);
    this.dataForm.controls['IsDeleted'].markAsPristine;

    this.dataForm.controls['Username'].setValue(null);
    this.dataForm.controls['Username'].markAsPristine;

    this.dataForm.controls['Pword'].setValue(null);
    this.dataForm.controls['Pword'].markAsPristine;

    this.dataForm.controls['Fname'].setValue(null);
    this.dataForm.controls['Fname'].markAsPristine;

    this.dataForm.controls['Lname'].setValue(null);
    this.dataForm.controls['Lname'].markAsPristine;

    //this.dataForm
    } else if (this.action=='edit') {
    
      this.dataForm = this._fb.group({
        'IsActive': [true, Validators.required],
        'IsDeleted': [false, Validators.required],
        'Username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern(CodeValidationRegex)])],
        'Pword': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],      
        'Fname': [null, Validators.required],
        'Lname': [null, Validators.required]
      });

      this.dataForm.controls['IsActive'].setValue(this.updatedUser.ISACTIVE);
      this.dataForm.controls['IsActive'].markAsPristine;

      this.dataForm.controls['IsDeleted'].setValue(this.updatedUser.ISDELETED);
      this.dataForm.controls['IsDeleted'].markAsPristine;

      this.dataForm.controls['Username'].setValue(this.updatedUser.USERNAME);
      this.dataForm.controls['Username'].markAsPristine;

      this.dataForm.controls['Pword'].setValue(this.updatedUser.PWORD);
      this.dataForm.controls['Pword'].markAsPristine;

      this.dataForm.controls['Fname'].setValue(this.updatedUser.PWORD);
      this.dataForm.controls['Fname'].markAsPristine;

      this.dataForm.controls['Lname'].setValue(this.updatedUser.PWORD);
      this.dataForm.controls['Lname'].markAsPristine;
    }
  }

  // Function used when clicking cancel button to reset the form.
  onCancelClick() {
    //console.log('Clicked Cancel!');
    this.resetForm();
  }

  // Function used when clicking button Go Back To List to navigate back to the list Tags view
  navBackToList() {
    this._router.navigateByUrl('/auth/datamgmtmenu/listusers');
  }

  // Function to submit / write form contents to the database.
  onSubmit() {

    if (this.action=='create') {
      //console.log('Clicked Submit');
      this.createdUser = new User(0,'','',false,false,'','','','');

      this.createdUser.ISACTIVE = this.dataForm.controls['IsActive'].value;
      this.createdUser.ISDELETED = this.dataForm.controls['IsDeleted'].value;
      this.createdUser.USERNAME = this.dataForm.controls['Username'].value;
      this.createdUser.PWORD = this.dataForm.controls['Pword'].value;

      var UsernameValue;
      this.UsernameValue = this.createdUser.USERNAME;

      //console.log(this.createdTag);
      //console.log(this.statusMessage + ':' + this.statusMessageEmpty);
      this._userService.createUser(this.createdUser)
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
    } else if (this.action=='edit') {
      if (!this.dataForm.controls['IsActive'].pristine) {
      this.updatedUser.ISACTIVE = this.dataForm.controls['IsActive'].value;
      }

      if (!this.dataForm.controls['IsDeleted'].pristine) {
        this.updatedUser.ISDELETED = this.dataForm.controls['IsDeleted'].value;
      }
      
      if (!this.dataForm.controls['Username'].pristine) {
        this.updatedUser.USERNAME = this.dataForm.controls['Username'].value;
      }

      if (!this.dataForm.controls['Pword'].pristine) {
        this.updatedUser.PWORD = this.dataForm.controls['Pword'].value;
      }

      if (!this.dataForm.controls['Fname'].pristine) {
        this.updatedUser.FNAME = this.dataForm.controls['Fname'].value;
      }

       if (!this.dataForm.controls['Lname'].pristine) {
        this.updatedUser.LNAME = this.dataForm.controls['Lname'].value;
      }

      this._userService.updateUser(this.updatedUser)
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

      //console.log('User:' + JSON.stringify(this.updatedUser));
      //this._userService.updateUser(this.updatedUser);

    }
  }
  
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

  msgs: Message[];

  uploadedFiles: any[] = [];

  demo: any[] = [];

  imagepath: string;

  DBAPI = AppSettings.DATA_API_ENDPOINT+'/Users/ProfilePicUpload';

  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
  
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onSelect(event) {

    console.log('onSelect: ' + event);
    console.log(this.demo);

    for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
  
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: this.uploadedFiles[0].name});
      console.log(JSON.stringify(this.uploadedFiles[0].objectURL.changingThisBreaksApplicationSecurity));
      this.imagepath = JSON.stringify(this.uploadedFiles[0].objectURL.changingThisBreaksApplicationSecurity);
  }

  onBasicUpload(event) {
    console.log('onBasicUpload: ' + event);
    
    for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
  
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});

  }

  myUploader(event) {
    console.log('myUploader: ' + event);

    for(let file of event.files) {
          this.uploadedFiles.push(file);
          console.log('ForLoop: ' + event.files);
      }
  
      this.msgs = [];
      //this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: JSON.stringify(event.files)});
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: this.uploadedFiles[0].name});
  }

}
