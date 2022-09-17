import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddissueproductComponent } from './addissueproduct.component';

describe('AddissueproductComponent', () => {
  let component: AddissueproductComponent;
  let fixture: ComponentFixture<AddissueproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddissueproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddissueproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
