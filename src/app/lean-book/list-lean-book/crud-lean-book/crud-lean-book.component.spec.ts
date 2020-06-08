import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLeanBookComponent } from './crud-lean-book.component';

describe('CrudLeanBookComponent', () => {
  let component: CrudLeanBookComponent;
  let fixture: ComponentFixture<CrudLeanBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudLeanBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLeanBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
