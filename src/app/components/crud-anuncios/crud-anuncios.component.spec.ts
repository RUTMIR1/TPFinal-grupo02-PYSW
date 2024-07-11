import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAnunciosComponent } from './crud-anuncios.component';

describe('CrudAnunciosComponent', () => {
  let component: CrudAnunciosComponent;
  let fixture: ComponentFixture<CrudAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAnunciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
