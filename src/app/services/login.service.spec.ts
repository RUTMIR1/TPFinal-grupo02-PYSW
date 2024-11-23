import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]  // Asegúrate de importar HttpClientModule aquí
    });
    service = TestBed.inject(LoginService);  // Inyectar el servicio LoginService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica que el servicio se cree correctamente
  });
});