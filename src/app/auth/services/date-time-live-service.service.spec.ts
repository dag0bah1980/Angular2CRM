/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateTimeLiveServiceService } from './date-time-live-service.service';

describe('Service: DateTimeLiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateTimeLiveServiceService]
    });
  });

  it('should ...', inject([DateTimeLiveServiceService], (service: DateTimeLiveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
