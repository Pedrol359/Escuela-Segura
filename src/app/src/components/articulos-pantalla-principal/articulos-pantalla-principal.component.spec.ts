import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosPantallaPrincipalComponent } from './articulos-pantalla-principal.component';

describe('ArticulosPantallaPrincipalComponent', () => {
  let component: ArticulosPantallaPrincipalComponent;
  let fixture: ComponentFixture<ArticulosPantallaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosPantallaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosPantallaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
