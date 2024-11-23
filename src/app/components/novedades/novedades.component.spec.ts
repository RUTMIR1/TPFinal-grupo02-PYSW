import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { RouterTestingModule } from '@angular/router/testing'; // Ayuda a simular rutas
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule para que HttpClient esté disponible
import { NovedadesComponent } from './novedades.component';

describe('NovedadesComponent', () => {
  let component: NovedadesComponent;
  let fixture: ComponentFixture<NovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NovedadesComponent, 
        RouterTestingModule, // Simular rutas
        HttpClientModule, // Importar para habilitar HttpClient
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: {} } }, // Mock de ActivatedRoute
        },
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(NovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
