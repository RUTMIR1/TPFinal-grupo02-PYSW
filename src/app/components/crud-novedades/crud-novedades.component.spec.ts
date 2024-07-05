import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNovedadesComponent } from './crud-novedades.component';

describe('CrudNovedadesComponent', () => {
  let component: CrudNovedadesComponent;
  let fixture: ComponentFixture<CrudNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudNovedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
