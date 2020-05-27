import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAuthorComponent } from './crud-author.component';

describe('CrudAuthorComponent', () => {
  let component: CrudAuthorComponent;
  let fixture: ComponentFixture<CrudAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
