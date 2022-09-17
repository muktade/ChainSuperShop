import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchstockComponent } from './branchstock.component';

describe('BranchstockComponent', () => {
  let component: BranchstockComponent;
  let fixture: ComponentFixture<BranchstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
