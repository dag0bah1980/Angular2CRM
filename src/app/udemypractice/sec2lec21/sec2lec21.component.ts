import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ang2-crm-sec2lec21',
  templateUrl: 'sec2lec21.component.html',
  styleUrls: ['sec2lec21.component.css']
})
export class Sec2lec21Component {
  stringInterpolation = 'string stuff';
  numberInterpolation = '3';

  onTest(){
    return true;
  }
}

