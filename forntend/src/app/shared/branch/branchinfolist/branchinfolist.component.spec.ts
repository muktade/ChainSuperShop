import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchinfolistComponent } from './branchinfolist.component';

describe('BranchinfolistComponent', () => {
  let component: BranchinfolistComponent;
  let fixture: ComponentFixture<BranchinfolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchinfolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchinfolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
