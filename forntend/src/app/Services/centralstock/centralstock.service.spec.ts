import { TestBed } from '@angular/core/testing';

import { CentralstockService } from './centralstock.service';

describe('CentralstockService', () => {
  let service: CentralstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
