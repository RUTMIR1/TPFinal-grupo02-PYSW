import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { CrudAnunciosComponent } from './crud-anuncios.component';

describe('CrudAnunciosComponent', () => {
  let component: CrudAnunciosComponent;
  let fixture: ComponentFixture<CrudAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CrudAnunciosComponent, // Tu componente
        HttpClientModule // Importar HttpClientModule para resolver HttpClient
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CrudAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
