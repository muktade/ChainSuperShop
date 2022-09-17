import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeridsaleComponent } from './peridsale.component';

describe('PeridsaleComponent', () => {
  let component: PeridsaleComponent;
  let fixture: ComponentFixture<PeridsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeridsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeridsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
