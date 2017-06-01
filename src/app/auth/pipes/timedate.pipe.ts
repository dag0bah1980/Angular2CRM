import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment-timezone';



@Pipe({
  name: 'timedate'
})
export class TimedatePipe implements PipeTransform {

  transform(date: any, arg1: any): any {
    //this.value = this.value | 'EEE MMM d, h:mm:ss a';
    let d = new Date(date)    
    if (arg1 == 'short' ){
      return moment(d).format('MMM YYYY[@]h:mma');  
    } 
    else if (arg1 == 'extrashort') {
      return moment(d).format('MM[/]DD[@]h:mma');  
    }
    else if (arg1 == 'medium') {
      return moment(d).format('MMM DD YYYY[@]h:mm a');  
    }
    else if (arg1 == 'long') {
      return moment(d).format('ddd MMM DD YYYY[@]h:mm:ss a');
    } 
    else if (arg1 == 'extralong') {
      return moment(d).tz('America/Toronto').format('ddd MMM DD YYYY[@]h:mm:ss a zz');
    }
    else {
      return moment(d).format('MMM YYYY[@]h:mm:ss a'); 
    }
  }

}
