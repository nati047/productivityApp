import { TestBed } from '@angular/core/testing';

import { CheckMarksService } from './check-marks.service';

describe('CheckMarksService', () => {
  let service: CheckMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
