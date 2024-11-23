import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlquilerService } from './alquiler.service';

describe('AlquilerService', () => {
  let service: AlquilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AlquilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
