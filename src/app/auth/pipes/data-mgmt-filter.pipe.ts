import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'dataMgmtFilter'
})
export class DataMgmtFilterPipe implements PipeTransform {


  transform(array: any[], query: string, field: string): any {
      // Bunch of code I needed to debug the original filter pipe (which probably never worked)
      //console.log('array:' + JSON.stringify(array));
      //console.log('pipe query:' + query);   
      //console.log('field:' + field);     
        /*
        _.filter(array, function(item){
            //let y = item.DESCRIPTION === 'admin';
            //console.log('item:' + item.DESCRIPTION);
             //let search = item.DESCRIPTION; 
             //console.log(search + 'vs.' + query);
              
             item => item['DESCRIPTION'].indexOf(query) > -1;
             //console.log(item);
             //return item;
        });
        */


        if (query) {                
            let ret = _.filter(array, row=>_.includes(row['DESCRIPTION'],query));
            //console.log(ret);
            return ret;

        }        
        return array;
    }

}
