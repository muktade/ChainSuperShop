import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingreceiveComponent } from './pendingreceive.component';

describe('PendingreceiveComponent', () => {
  let component: PendingreceiveComponent;
  let fixture: ComponentFixture<PendingreceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingreceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
