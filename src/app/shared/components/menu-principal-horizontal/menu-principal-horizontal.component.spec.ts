import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalHorizontalComponent } from './menu-principal-horizontal.component';

describe('MenuPrincipalHorizontalComponent', () => {
  let component: MenuPrincipalHorizontalComponent;
  let fixture: ComponentFixture<MenuPrincipalHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipalHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
