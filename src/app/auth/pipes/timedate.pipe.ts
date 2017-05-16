import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'timedate'
})
export class TimedatePipe implements PipeTransform {

  transform(date: any, arg1: any): any {
    //this.value = this.value | 'EEE MMM d, h:mm:ss a';
    let d = new Date(date)
    if (arg1 == 'noyear' ){
      return moment(d).format('ddd MMM DD[@]h:mm:ss a');  
    }
    else {
      return moment(d).format('ddd MMM DD YYYY[@]h:mm:ss a');
    }
  }

}
