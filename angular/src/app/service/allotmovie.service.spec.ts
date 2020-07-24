import { TestBed } from '@angular/core/testing';

import { AllotmovieService } from './allotmovie.service';

describe('AllotmovieService', () => {
  let service: AllotmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllotmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
