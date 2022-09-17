import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedetaillistComponent } from './purchasedetaillist.component';

describe('PurchasedetaillistComponent', () => {
  let component: PurchasedetaillistComponent;
  let fixture: ComponentFixture<PurchasedetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
