import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelasSegurasComponent } from './escuelas-seguras.component';

describe('EscuelasSegurasComponent', () => {
  let component: EscuelasSegurasComponent;
  let fixture: ComponentFixture<EscuelasSegurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuelasSegurasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelasSegurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
