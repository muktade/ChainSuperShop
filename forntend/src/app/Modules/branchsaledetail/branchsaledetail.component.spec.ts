import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchsaledetailComponent } from './branchsaledetail.component';

describe('BranchsaledetailComponent', () => {
  let component: BranchsaledetailComponent;
  let fixture: ComponentFixture<BranchsaledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchsaledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchsaledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
