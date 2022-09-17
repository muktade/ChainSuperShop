import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueproductComponent } from './issueproduct.component';

describe('IssueproductComponent', () => {
  let component: IssueproductComponent;
  let fixture: ComponentFixture<IssueproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
