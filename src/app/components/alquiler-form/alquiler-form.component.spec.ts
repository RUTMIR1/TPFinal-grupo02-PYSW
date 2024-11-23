import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importar RouterTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { AlquilerFormComponent } from './alquiler-form.component';

describe('AlquilerFormComponent', () => {
  let component: AlquilerFormComponent;
  let fixture: ComponentFixture<AlquilerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AlquilerFormComponent,
        RouterTestingModule, // Simular rutas y ActivatedRoute
        HttpClientTestingModule, // Proveer HttpClient para las pruebas
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlquilerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
