import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchasedetailComponent } from './addpurchasedetail.component';

describe('AddpurchasedetailComponent', () => {
  let component: AddpurchasedetailComponent;
  let fixture: ComponentFixture<AddpurchasedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpurchasedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpurchasedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
