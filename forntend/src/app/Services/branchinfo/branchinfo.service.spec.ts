import { TestBed } from '@angular/core/testing';

import { BranchinfoService } from './branchinfo.service';

describe('BranchinfoService', () => {
  let service: BranchinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
