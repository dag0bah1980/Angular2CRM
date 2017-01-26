import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeLiveServiceService {

  whatTime: Date;

  getDateTime(): Date {
    this.whatTime = new Date();
    return this.whatTime;
  }

  constructor() { }

}
