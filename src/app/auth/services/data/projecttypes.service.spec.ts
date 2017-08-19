import { TestBed, inject } from '@angular/core/testing';

import { ProjecttypesService } from './projecttypes.service';

describe('ProjecttypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjecttypesService]
    });
  });

  it('should be created', inject([ProjecttypesService], (service: ProjecttypesService) => {
    expect(service).toBeTruthy();
  }));
});
