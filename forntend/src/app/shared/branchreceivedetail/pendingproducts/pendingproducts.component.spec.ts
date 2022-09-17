import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingproductsComponent } from './pendingproducts.component';

describe('PendingproductsComponent', () => {
  let component: PendingproductsComponent;
  let fixture: ComponentFixture<PendingproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
