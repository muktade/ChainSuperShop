import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchreceivedproductComponent } from './branchreceivedproduct.component';

describe('BranchreceivedproductComponent', () => {
  let component: BranchreceivedproductComponent;
  let fixture: ComponentFixture<BranchreceivedproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchreceivedproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchreceivedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
