import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';  // Importar ActivatedRoute
import { NovedadFormComponent } from './novedad-form.component';
import { of } from 'rxjs';  // Importar `of` para simular el valor de ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { ToastrModule } from 'ngx-toastr';  // Importar ToastrModule para las pruebas

// Crear un mock para ActivatedRoute
class ActivatedRouteStub {
  snapshot = { paramMap: { get: () => 'mockId' } };  // Simular un parámetro
  params = of({ id: 'mockId' });  // Puedes usar esto si tu componente escucha cambios en los parámetros
}

describe('NovedadFormComponent', () => {
  let component: NovedadFormComponent;
  let fixture: ComponentFixture<NovedadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NovedadFormComponent,               // El componente bajo prueba
        HttpClientTestingModule,            // Proveer HttpClient para las pruebas
        ToastrModule.forRoot(),             // Agregar el ToastrModule para usar ToastrService
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },  // Proveer el mock de ActivatedRoute
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
