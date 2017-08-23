import { TestBed, inject } from '@angular/core/testing';

import { TiersService } from './tiers.service';

describe('TiersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiersService]
    });
  });

  it('should be created', inject([TiersService], (service: TiersService) => {
    expect(service).toBeTruthy();
  }));
});
