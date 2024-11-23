import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PagoService } from './pago.service';

describe('PagoService', () => {
  let service: PagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
