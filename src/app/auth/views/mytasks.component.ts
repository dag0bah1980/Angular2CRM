import { Component, OnInit } from '@angular/core';

import { Car } from '../class/Car';

import { CarService } from '../services/data/cars.service';
import {SelectItem, MenuItem} from 'primeng/primeng';
import {Message} from  'primeng/primeng';

import { ProjectsService } from '../services/data/projects.service';

import { Project } from '../class/project';
import { Observable } from 'rxjs/Rx';

import { ActivestatuslabelComponent } from '../widgets/activestatuslabel/activestatuslabel.component';

import { TimedatePipe } from '../pipes/timedate.pipe';

import { Router } from '@angular/router';

import { Http } from '@angular/http';

import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'ang2-crm-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css'],
  providers: [ CarService, ProjectsService ]
})
export class MytasksComponent implements OnInit {

 errorMessage = "";
  errorUser = "";
  errorScreen = "List Projects / Tasks";
  errorAction ="";
  refreshTime: Date;
  private data;


 cars: Car[];

  brands: SelectItem[];

  rowexpanded: any[];

  msgs: Message[] = [];
  
   cols: any[];
    
    selectedCar: Car;
    
    dialogVisible: boolean;

  private subtaskslist: boolean = true;

  items: MenuItem[];

  constructor(private _carService: CarService, private _http: Http, private _projectsservice: ProjectsService, 
  private _cookieService: CookieService, private _router: Router) { }

  ngOnInit() {
    this._carService.getCarsSmall().then(cars => this.cars = cars);

    this.brands = [
            {label: 'Choose', value: null},
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

    this.rowexpanded = [
      { col1: '1', col2: '2', col3: '3'},
      { col1: '2', col2: '2', col3: '3'},
      { col1: '3', col2: '2', col3: '3'},
      { col1: '4', col2: '2', col3: '3'},
      { col1: '5', col2: '2', col3: '3'},
    ];

    this.items = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.onClick();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.onClick();
            }},
            {label: 'Angular.io', icon: 'fa-link', url: '#'},
            {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['#']}
    ]; 

    this.loadProjectsObservable();
    //console.log(JSON.stringify(this.data));

  }

  display: boolean = false;

  private selectedData = null;
  private selectedDataText = JSON.stringify(this.selectedData);
    showDialog(data) {
        this.display = true;
        this.selectedData = data;
        this.selectedDataText = JSON.stringify(this.selectedData);
    }

  selectCar(car: Car) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
    }

      showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }

    loadProjectsObservable(){
  this._projectsservice.getProjects().subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log(JSON.stringify(this.data));  
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "loadProjectsObservable";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  logicalDeleteProject(deletedProject: Project){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._projectsservice.logicalDeleteProject(deletedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalDeleteProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  logicalUndeleteProject(deletedProject: Project){
    //console.log('clicked logical delete id:'+deletedTag.ID);
    this._projectsservice.logicalUndeleteProject(deletedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "logicalUndeleteProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  deactivateProject(deactivatedProject: Project){
    this._projectsservice.deactivateProject(deactivatedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "deactivateProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }

  activateProject(activatedProject: Project){
    this._projectsservice.activateProject(activatedProject).subscribe(
      data => {
        setTimeout(()=> {
          this.data = data;        
          console.log();    
        }, 1000); 
      },
      error =>  { 
        this.errorMessage = error;
        this.errorAction = "activateProject";
        this.errorUser = this._cookieService.get('USER');;
        document.getElementById("openModalErrorMessageButton").click();
      }
    );
  }
  

  onClick(){

  }

  createProject(){
    this._router.navigateByUrl('/auth/createproject');
  }

  refreshNow(){
    this.loadProjectsObservable();
    this.refreshTime = new Date();
  }
  
}
