import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioV2Component } from './inicio-v2.component';

describe('InicioV2Component', () => {
  let component: InicioV2Component;
  let fixture: ComponentFixture<InicioV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
