import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedetaillistComponent } from './receivedetaillist.component';

describe('ReceivedetaillistComponent', () => {
  let component: ReceivedetaillistComponent;
  let fixture: ComponentFixture<ReceivedetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
