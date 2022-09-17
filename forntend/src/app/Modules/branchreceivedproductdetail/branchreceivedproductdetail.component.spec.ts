import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchreceivedproductdetailComponent } from './branchreceivedproductdetail.component';

describe('BranchreceivedproductdetailComponent', () => {
  let component: BranchreceivedproductdetailComponent;
  let fixture: ComponentFixture<BranchreceivedproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchreceivedproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchreceivedproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
