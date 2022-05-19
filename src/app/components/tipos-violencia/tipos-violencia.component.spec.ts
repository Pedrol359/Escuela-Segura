import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposViolenciaComponent } from './tipos-violencia.component';

describe('TiposViolenciaComponent', () => {
  let component: TiposViolenciaComponent;
  let fixture: ComponentFixture<TiposViolenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposViolenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposViolenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
