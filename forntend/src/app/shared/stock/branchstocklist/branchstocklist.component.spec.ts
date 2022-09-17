import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchstocklistComponent } from './branchstocklist.component';

describe('BranchstocklistComponent', () => {
  let component: BranchstocklistComponent;
  let fixture: ComponentFixture<BranchstocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchstocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchstocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
