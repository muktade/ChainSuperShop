import { TestBed } from '@angular/core/testing';

import { BranchsaleService } from './branchsale.service';

describe('BranchsaleService', () => {
  let service: BranchsaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchsaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
