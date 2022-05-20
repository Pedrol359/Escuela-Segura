import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaCardComponent } from './escuela-card.component';

describe('EscuelaCardComponent', () => {
  let component: EscuelaCardComponent;
  let fixture: ComponentFixture<EscuelaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuelaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
