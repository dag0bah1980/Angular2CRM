import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeLiveServiceService {

  whatTime: Date;

  getDateTime(): Date {
    this.whatTime = new Date();
    return this.whatTime;
  }

  getDateTime2(): Promise<Date> {
    this.whatTime = new Date();
    return Promise.resolve(this.whatTime);
  }

  getDateTimeSlowly(): Promise<Date> {
    this.whatTime = new Date();
    return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.whatTime = new Date()), 3000);
  });
  }

  

  constructor() { }

}
