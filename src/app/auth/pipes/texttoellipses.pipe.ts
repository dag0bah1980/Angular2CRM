import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texttoellipses'
})
export class TexttoellipsesPipe implements PipeTransform {

  transform(text: string, length: number): any {
    return text;
    
  }

}
