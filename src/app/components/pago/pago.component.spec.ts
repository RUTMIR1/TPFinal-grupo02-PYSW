import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { PagoComponent } from './pago.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';  // Necesario para crear un observable de prueba
import { ToastrModule } from 'ngx-toastr'; // Importar ToastrModule

// Crear un mock para ActivatedRoute
class ActivatedRouteMock {
  params = of({ id: '1', idAlquiler: '123' });  // Simula los parámetros de la ruta
}

describe('PagoComponent', () => {
  let component: PagoComponent;
  let fixture: ComponentFixture<PagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PagoComponent,              // Componente bajo prueba
        HttpClientTestingModule,    // Proveer HttpClient para las pruebas
        ToastrModule.forRoot(),     // Proveer ToastrModule
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },  // Proveer un mock de ActivatedRoute
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(PagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica si el componente se crea correctamente
  });
});
