/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { HttpapiService } from './httpapi.service';

describe('Service: Httpapi', () => {
  beforeEach(() => {
    addProviders([HttpapiService]);
  });

  it('should ...',
    inject([HttpapiService],
      (service: HttpapiService) => {
        expect(service).toBeTruthy();
      }));
});
