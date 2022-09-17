import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchsaleComponent } from './branchsale.component';

describe('BranchsaleComponent', () => {
  let component: BranchsaleComponent;
  let fixture: ComponentFixture<BranchsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
