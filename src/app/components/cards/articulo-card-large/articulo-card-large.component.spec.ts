import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCardLargeComponent } from './articulo-card-large.component';

describe('ArticuloCardLargeComponent', () => {
  let component: ArticuloCardLargeComponent;
  let fixture: ComponentFixture<ArticuloCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloCardLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
