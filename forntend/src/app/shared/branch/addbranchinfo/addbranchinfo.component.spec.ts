import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbranchinfoComponent } from './addbranchinfo.component';

describe('AddbranchinfoComponent', () => {
  let component: AddbranchinfoComponent;
  let fixture: ComponentFixture<AddbranchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbranchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbranchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
