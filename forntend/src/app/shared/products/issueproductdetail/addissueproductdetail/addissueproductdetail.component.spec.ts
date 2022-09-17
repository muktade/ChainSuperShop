import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddissueproductdetailComponent } from './addissueproductdetail.component';

describe('AddissueproductdetailComponent', () => {
  let component: AddissueproductdetailComponent;
  let fixture: ComponentFixture<AddissueproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddissueproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddissueproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
