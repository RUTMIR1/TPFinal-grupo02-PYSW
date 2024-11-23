import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PromocionService } from './promocion.service';

describe('PromocionService', () => {
  let service: PromocionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PromocionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
