import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaledetaillistComponent } from './saledetaillist.component';

describe('SaledetaillistComponent', () => {
  let component: SaledetaillistComponent;
  let fixture: ComponentFixture<SaledetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaledetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaledetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
