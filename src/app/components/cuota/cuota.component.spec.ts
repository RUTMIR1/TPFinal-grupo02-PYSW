import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { CuotaComponent } from './cuota.component';
import { ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute
import { of } from 'rxjs'; // Importar 'of' para crear un observable

// Mock para ActivatedRoute
class ActivatedRouteMock {
  params = of({ id: 'mockId' }); // Simulando el parámetro de la ruta
  snapshot = { paramMap: { get: () => 'mockId' } }; // Mock para snapshot
}

describe('CuotaComponent', () => {
  let component: CuotaComponent;
  let fixture: ComponentFixture<CuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, // Proveer HttpClient
      ],
      providers: [
        CuotaComponent, // El componente bajo prueba
        {
          provide: ActivatedRoute, // Mockear ActivatedRoute
          useClass: ActivatedRouteMock,
        },
        // Aquí agregaríamos los servicios mockeados si los necesitas
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica si el componente se crea correctamente
  });
});
