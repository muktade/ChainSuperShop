import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysectionComponent } from './bodysection.component';

describe('BodysectionComponent', () => {
  let component: BodysectionComponent;
  let fixture: ComponentFixture<BodysectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodysectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
