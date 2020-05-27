import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGenreComponent } from './crud-genre.component';

describe('CrudGenreComponent', () => {
  let component: CrudGenreComponent;
  let fixture: ComponentFixture<CrudGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
