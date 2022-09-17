import { TestBed } from '@angular/core/testing';

import { IssueproductdetailService } from './issueproductdetail.service';

describe('IssueproductdetailService', () => {
  let service: IssueproductdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueproductdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
