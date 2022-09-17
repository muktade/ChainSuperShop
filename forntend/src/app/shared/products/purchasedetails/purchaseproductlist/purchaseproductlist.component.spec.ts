import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseproductlistComponent } from './purchaseproductlist.component';

describe('PurchaseproductlistComponent', () => {
  let component: PurchaseproductlistComponent;
  let fixture: ComponentFixture<PurchaseproductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseproductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
