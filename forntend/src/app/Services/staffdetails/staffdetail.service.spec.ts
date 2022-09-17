import { TestBed } from '@angular/core/testing';

import { StaffdetailService } from './staffdetail.service';

describe('StaffdetailService', () => {
  let service: StaffdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
