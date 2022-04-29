import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInstitucionEducativaComponent } from './registrar-institucion-educativa.component';

describe('RegistrarInstitucionEducativaComponent', () => {
  let component: RegistrarInstitucionEducativaComponent;
  let fixture: ComponentFixture<RegistrarInstitucionEducativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarInstitucionEducativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarInstitucionEducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
