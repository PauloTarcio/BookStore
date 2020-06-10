import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBooksComponent } from './reservation-books.component';

describe('ReservationBooksComponent', () => {
  let component: ReservationBooksComponent;
  let fixture: ComponentFixture<ReservationBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
