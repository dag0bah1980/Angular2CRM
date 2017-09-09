import { Component, OnInit } from '@angular/core';

import { Car } from '../class/Car';

import { CarService } from '../services/data/cars.service';

@Component({
  selector: 'ang2-crm-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css'],
  providers: [ CarService ]
})
export class MytasksComponent implements OnInit {


 cars: Car[];

  constructor(private _carService: CarService) { }

  ngOnInit() {
    this._carService.getCarsSmall().then(cars => this.cars = cars);
  }

}
