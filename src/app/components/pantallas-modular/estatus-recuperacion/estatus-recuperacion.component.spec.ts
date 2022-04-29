import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusRecuperacionComponent } from './estatus-recuperacion.component';

describe('EstatusRecuperacionComponent', () => {
  let component: EstatusRecuperacionComponent;
  let fixture: ComponentFixture<EstatusRecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatusRecuperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
