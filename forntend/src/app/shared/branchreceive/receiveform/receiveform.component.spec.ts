import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveformComponent } from './receiveform.component';

describe('ReceiveformComponent', () => {
  let component: ReceiveformComponent;
  let fixture: ComponentFixture<ReceiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
