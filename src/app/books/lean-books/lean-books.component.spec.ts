import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanBooksComponent } from './lean-books.component';

describe('LeanBooksComponent', () => {
  let component: LeanBooksComponent;
  let fixture: ComponentFixture<LeanBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
