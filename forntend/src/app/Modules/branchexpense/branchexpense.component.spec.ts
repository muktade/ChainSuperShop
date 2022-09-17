import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchexpenseComponent } from './branchexpense.component';

describe('BranchexpenseComponent', () => {
  let component: BranchexpenseComponent;
  let fixture: ComponentFixture<BranchexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
