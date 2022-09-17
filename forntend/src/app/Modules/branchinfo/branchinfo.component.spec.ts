import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchinfoComponent } from './branchinfo.component';

describe('BranchinfoComponent', () => {
  let component: BranchinfoComponent;
  let fixture: ComponentFixture<BranchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
