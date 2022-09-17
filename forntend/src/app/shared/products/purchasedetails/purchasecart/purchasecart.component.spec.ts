import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasecartComponent } from './purchasecart.component';

describe('PurchasecartComponent', () => {
  let component: PurchasecartComponent;
  let fixture: ComponentFixture<PurchasecartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasecartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
