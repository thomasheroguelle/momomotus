import { TestBed } from '@angular/core/testing';

import { SharedserviceService } from './shared';

describe('SharedserviceService', () => {
  let service: SharedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
