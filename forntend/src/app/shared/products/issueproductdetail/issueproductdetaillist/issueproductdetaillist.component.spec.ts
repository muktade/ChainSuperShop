import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueproductdetaillistComponent } from './issueproductdetaillist.component';

describe('IssueproductdetaillistComponent', () => {
  let component: IssueproductdetaillistComponent;
  let fixture: ComponentFixture<IssueproductdetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueproductdetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueproductdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
