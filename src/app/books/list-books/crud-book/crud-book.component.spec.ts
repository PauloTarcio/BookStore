import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBookComponent } from './crud-book.component';

describe('CrudBookComponent', () => {
  let component: CrudBookComponent;
  let fixture: ComponentFixture<CrudBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
