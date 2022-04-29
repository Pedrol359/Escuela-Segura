import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBasicaComponent } from './navbar-basica.component';

describe('NavbarBasicaComponent', () => {
  let component: NavbarBasicaComponent;
  let fixture: ComponentFixture<NavbarBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBasicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
