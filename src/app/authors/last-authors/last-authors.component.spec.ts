import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAuthorsComponent } from './last-authors.component';

describe('LastAuthorsComponent', () => {
  let component: LastAuthorsComponent;
  let fixture: ComponentFixture<LastAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
