import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texttoellipses'
})
export class TexttoellipsesPipe implements PipeTransform {

  transform(text: any, length: any): any {
    if (text == null) {
      return text  + " ...";
    } else {
      return text.substr(0,length) + " ...";;
    }    
  }

}
