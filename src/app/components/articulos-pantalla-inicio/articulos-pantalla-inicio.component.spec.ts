import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosPantallaInicioComponent } from './articulos-pantalla-inicio.component';

describe('ArticulosPantallaInicioComponent', () => {
  let component: ArticulosPantallaInicioComponent;
  let fixture: ComponentFixture<ArticulosPantallaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosPantallaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosPantallaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
