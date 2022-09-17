import { TestBed } from '@angular/core/testing';

import { BranchstockService } from './branchstock.service';

describe('BranchstockService', () => {
  let service: BranchstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
