import { TestBed, inject } from '@angular/core/testing';

import { StatusesService } from './statuses.service';

describe('StatusesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusesService]
    });
  });

  it('should be created', inject([StatusesService], (service: StatusesService) => {
    expect(service).toBeTruthy();
  }));
});
