import { TestBed } from '@angular/core/testing';

import { BranchsaledetailService } from './branchsaledetail.service';

describe('BranchsaledetailService', () => {
  let service: BranchsaledetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchsaledetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
