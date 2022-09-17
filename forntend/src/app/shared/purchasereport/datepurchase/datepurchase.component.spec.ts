import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepurchaseComponent } from './datepurchase.component';

describe('DatepurchaseComponent', () => {
  let component: DatepurchaseComponent;
  let fixture: ComponentFixture<DatepurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
