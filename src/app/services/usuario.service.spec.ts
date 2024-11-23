import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule
import { UsuarioService } from './usuario.service';  // Importar el servicio

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]  // Asegúrate de importar HttpClientModule
    });
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
