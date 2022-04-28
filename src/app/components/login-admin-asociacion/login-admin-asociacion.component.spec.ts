import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminAsociacionComponent } from './login-admin-asociacion.component';

describe('LoginAdminAsociacionComponent', () => {
  let component: LoginAdminAsociacionComponent;
  let fixture: ComponentFixture<LoginAdminAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAdminAsociacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
