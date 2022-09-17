import { TestBed } from '@angular/core/testing';

import { BranchexpenseService } from './branchexpense.service';

describe('BranchexpenseService', () => {
  let service: BranchexpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchexpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
