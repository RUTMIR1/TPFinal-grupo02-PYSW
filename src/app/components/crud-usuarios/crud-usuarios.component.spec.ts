import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudUsuariosComponent } from './crud-usuarios.component';
import { ToastrModule } from 'ngx-toastr'; // Importar ToastrModule para configurarlo
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule

describe('CrudUsuariosComponent', () => {
  let component: CrudUsuariosComponent;
  let fixture: ComponentFixture<CrudUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CrudUsuariosComponent,
        ToastrModule.forRoot(), // Configurar ToastrModule para las pruebas
        HttpClientTestingModule // Agregar HttpClientTestingModule para proveer HttpClient
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(CrudUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
