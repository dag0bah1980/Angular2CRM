/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticaterService } from './authenticater.service';

describe('Service: Authenticater', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticaterService]
    });
  });

  it('should ...', inject([AuthenticaterService], (service: AuthenticaterService) => {
    expect(service).toBeTruthy();
  }));
});
