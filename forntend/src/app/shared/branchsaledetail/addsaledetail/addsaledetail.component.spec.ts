import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsaledetailComponent } from './addsaledetail.component';

describe('AddsaledetailComponent', () => {
  let component: AddsaledetailComponent;
  let fixture: ComponentFixture<AddsaledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsaledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsaledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
