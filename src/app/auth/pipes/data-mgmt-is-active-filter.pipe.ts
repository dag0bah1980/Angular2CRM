import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'dataMgmtIsActiveFilter'
})
export class DataMgmtIsActiveFilterPipe implements PipeTransform {

  transform(array: any[], activefield: boolean): any {
    return _.filter(array, row=>row['ISACTIVE']===activefield)    
  }

}
