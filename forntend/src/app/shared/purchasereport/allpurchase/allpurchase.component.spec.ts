import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpurchaseComponent } from './allpurchase.component';

describe('AllpurchaseComponent', () => {
  let component: AllpurchaseComponent;
  let fixture: ComponentFixture<AllpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
