import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr'; // Importar ToastrModule para configurarlo
import { RegistroComponent } from './registro.component';
import { ActivatedRoute, Router } from '@angular/router'; // Importar ActivatedRoute y Router
import { of } from 'rxjs'; // Importar 'of' para simular un observable
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { Usuario } from '../../models/usuario';

// Mock para ActivatedRoute
class ActivatedRouteMock {
  params = of({ id: '0' }); // Simulamos el parámetro de la ruta
  snapshot = { paramMap: { get: () => '0' } }; // Mock para snapshot
}

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegistroComponent,
        ToastrModule.forRoot(), // Configurar ToastrModule para las pruebas
        HttpClientTestingModule, // Añadir HttpClientTestingModule para simular HTTP
      ],
      providers: [
        {
          provide: ActivatedRoute, // Proveer el mock de ActivatedRoute
          useClass: ActivatedRouteMock,
        },
        // Proveer el mock o implementación real de otros servicios si es necesario
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;

    // Inicializa Usuario con valores predeterminados para evitar acceso a propiedades indefinidas
    component.Usuario = {
      _id: '123',
      nombre: 'Juan',
      // inicializa otras propiedades de Usuario si es necesario
    } as Usuario;
    
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica si el componente se crea correctamente
  });
});
