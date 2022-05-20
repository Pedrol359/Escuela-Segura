import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionCardComponent } from './institucion-card.component';

describe('InstitucionCardComponent', () => {
  let component: InstitucionCardComponent;
  let fixture: ComponentFixture<InstitucionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitucionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
