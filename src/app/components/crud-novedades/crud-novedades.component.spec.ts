import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { CrudNovedadesComponent } from './crud-novedades.component';
import { ToastrModule } from 'ngx-toastr'; // Importar ToastrModule para las pruebas

describe('CrudNovedadesComponent', () => {
  let component: CrudNovedadesComponent;
  let fixture: ComponentFixture<CrudNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CrudNovedadesComponent, 
        HttpClientTestingModule, // Proveer HttpClient para las pruebas
        ToastrModule.forRoot(), // Configuración predeterminada de Toastr para pruebas
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
