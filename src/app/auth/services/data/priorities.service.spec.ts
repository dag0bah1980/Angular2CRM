import { TestBed, inject } from '@angular/core/testing';

import { PrioritiesService } from './priorities.service';

describe('PrioritiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrioritiesService]
    });
  });

  it('should be created', inject([PrioritiesService], (service: PrioritiesService) => {
    expect(service).toBeTruthy();
  }));
});
