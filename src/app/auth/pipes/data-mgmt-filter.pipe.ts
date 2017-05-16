import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'dataMgmtFilter'
})
export class DataMgmtFilterPipe implements PipeTransform {

  transform(array: any[], query: string, field: string): any {
      //console.log('array:' + array);
      //console.log('query:' + query);
        if (query) {
            return _.filter(array, row=>row[field].indexOf(query) > -1);
        }
        return array;
    }

}
