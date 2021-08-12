import { TestBed } from '@angular/core/testing';

import { UberService } from './uber.service';

describe('UberService', () => {
  let service: UberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
