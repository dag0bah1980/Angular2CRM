/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentusersService } from './currentusers.service';

describe('CurrentusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentusersService]
    });
  });

  it('should ...', inject([CurrentusersService], (service: CurrentusersService) => {
    expect(service).toBeTruthy();
  }));
});
