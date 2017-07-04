import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'dataMgmtIsDeletedFilter'
})
export class DataMgmtIsDeletedFilterPipe implements PipeTransform {

  transform(array: any[] , deletedfield: boolean): any {
    return _.filter(array, row=>row['ISDELETED']===deletedfield)    
  }

}
