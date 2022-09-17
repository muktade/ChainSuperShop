import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueproductdetailComponent } from './issueproductdetail.component';

describe('IssueproductdetailComponent', () => {
  let component: IssueproductdetailComponent;
  let fixture: ComponentFixture<IssueproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
