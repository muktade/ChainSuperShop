import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueproductlistComponent } from './issueproductlist.component';

describe('IssueproductlistComponent', () => {
  let component: IssueproductlistComponent;
  let fixture: ComponentFixture<IssueproductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueproductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
