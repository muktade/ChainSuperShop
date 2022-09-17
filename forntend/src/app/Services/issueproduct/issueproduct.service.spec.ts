import { TestBed } from '@angular/core/testing';

import { IssueproductService } from './issueproduct.service';

describe('IssueproductService', () => {
  let service: IssueproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
