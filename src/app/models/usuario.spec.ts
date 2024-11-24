import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario()).toBeTruthy();
  });

  it('siempre falla', () => {
    const usuario = new Usuario('Juan', 'Pérez', 'juan.perez@example.com', 'juan123', 'password', 123456789, 'admin');
    // Una expectativa incorrecta para que la prueba falle siempre
    expect(usuario.nombre).toBe('Incorrecto');
  });
});
