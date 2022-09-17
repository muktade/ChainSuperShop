import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BstocklistComponent } from './bstocklist.component';

describe('BstocklistComponent', () => {
  let component: BstocklistComponent;
  let fixture: ComponentFixture<BstocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BstocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BstocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
