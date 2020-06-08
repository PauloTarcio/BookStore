import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeanBookComponent } from './list-lean-book.component';

describe('ListLeanBookComponent', () => {
  let component: ListLeanBookComponent;
  let fixture: ComponentFixture<ListLeanBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeanBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeanBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
