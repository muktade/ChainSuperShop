import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralstockComponent } from './centralstock.component';

describe('CentralstockComponent', () => {
  let component: CentralstockComponent;
  let fixture: ComponentFixture<CentralstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
