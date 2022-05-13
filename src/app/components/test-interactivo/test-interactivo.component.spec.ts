import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInteractivoComponent } from './test-interactivo.component';

describe('TestInteractivoComponent', () => {
  let component: TestInteractivoComponent;
  let fixture: ComponentFixture<TestInteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInteractivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
