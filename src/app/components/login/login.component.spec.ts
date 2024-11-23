import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Correctamente importado
import { RouterTestingModule } from '@angular/router/testing'; // Simular rutas
import { ActivatedRoute } from '@angular/router';
import { ToastrModule } from 'ngx-toastr'; // Correcto uso de ToastrModule
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent, // Declarar el componente como parte de los imports
        HttpClientModule, // Importar correctamente HttpClientModule
        RouterTestingModule, // Simular rutas
        ToastrModule.forRoot(), // Configurar ToastrModule correctamente
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: {} } }, // Mock de ActivatedRoute
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});