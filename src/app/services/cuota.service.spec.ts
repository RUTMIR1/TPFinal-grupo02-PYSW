import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CuotaService } from './cuota.service';

describe('CuotaService', () => {
  let service: CuotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CuotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
