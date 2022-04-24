import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdminAsociacionComponent } from './registrar-admin-asociacion.component';

describe('RegistrarAdminAsociacionComponent', () => {
  let component: RegistrarAdminAsociacionComponent;
  let fixture: ComponentFixture<RegistrarAdminAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAdminAsociacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAdminAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
