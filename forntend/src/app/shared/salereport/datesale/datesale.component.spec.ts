import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesaleComponent } from './datesale.component';

describe('DatesaleComponent', () => {
  let component: DatesaleComponent;
  let fixture: ComponentFixture<DatesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
