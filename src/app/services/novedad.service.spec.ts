import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NovedadService } from './novedad.service';

describe('NovedadService', () => {
  let service: NovedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NovedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
