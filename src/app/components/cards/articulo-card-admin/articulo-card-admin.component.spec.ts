import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCardAdminComponent } from './articulo-card-admin.component';

describe('ArticuloCardAdminComponent', () => {
  let component: ArticuloCardAdminComponent;
  let fixture: ComponentFixture<ArticuloCardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloCardAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
