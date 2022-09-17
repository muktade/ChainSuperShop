import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralstocklistComponent } from './centralstocklist.component';

describe('CentralstocklistComponent', () => {
  let component: CentralstocklistComponent;
  let fixture: ComponentFixture<CentralstocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralstocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralstocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
