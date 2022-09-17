import { TestBed } from '@angular/core/testing';

import { ReceivedetailService } from './receivedetail.service';

describe('ReceivedetailService', () => {
  let service: ReceivedetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceivedetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
