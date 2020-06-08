import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHorizontalNavComponent } from './main-horizontal-nav.component';

describe('MenuPrincipalHorizontalComponent', () => {
  let component: MainHorizontalNavComponent;
  let fixture: ComponentFixture<MainHorizontalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHorizontalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHorizontalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
