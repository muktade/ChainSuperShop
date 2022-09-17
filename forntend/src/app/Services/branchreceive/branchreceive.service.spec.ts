import { TestBed } from '@angular/core/testing';

import { BranchreceiveService } from './branchreceive.service';

describe('BranchreceiveService', () => {
  let service: BranchreceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchreceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
