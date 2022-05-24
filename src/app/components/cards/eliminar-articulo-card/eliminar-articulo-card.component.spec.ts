import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarArticuloCardComponent } from './eliminar-articulo-card.component';

describe('EliminarArticuloCardComponent', () => {
  let component: EliminarArticuloCardComponent;
  let fixture: ComponentFixture<EliminarArticuloCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarArticuloCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarArticuloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
