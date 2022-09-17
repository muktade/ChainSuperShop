import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsaleComponent } from './allsale.component';

describe('AllsaleComponent', () => {
  let component: AllsaleComponent;
  let fixture: ComponentFixture<AllsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
