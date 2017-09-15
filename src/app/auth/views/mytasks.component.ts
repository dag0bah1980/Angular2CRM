import { Component, OnInit } from '@angular/core';

import { Car } from '../class/Car';

import { CarService } from '../services/data/cars.service';
import {SelectItem} from 'primeng/primeng';
import {Message} from  'primeng/primeng';

@Component({
  selector: 'ang2-crm-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css'],
  providers: [ CarService ]
})
export class MytasksComponent implements OnInit {


 cars: Car[];

  brands: SelectItem[];

  rowexpanded: any[];

  msgs: Message[] = [];
  
   cols: any[];
    
    selectedCar: Car;
    
    dialogVisible: boolean;
  constructor(private _carService: CarService) { }

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
      { col1: '1', col2: '2', col3: '3'}
    ]
  }

  selectCar(car: Car) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
    }

      showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }

  
}
