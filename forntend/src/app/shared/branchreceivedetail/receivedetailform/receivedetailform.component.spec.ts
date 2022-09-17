import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedetailformComponent } from './receivedetailform.component';

describe('ReceivedetailformComponent', () => {
  let component: ReceivedetailformComponent;
  let fixture: ComponentFixture<ReceivedetailformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedetailformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedetailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
