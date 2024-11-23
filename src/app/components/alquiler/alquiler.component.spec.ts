import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { AlquilerComponent } from './alquiler.component';
import { RouterTestingModule } from '@angular/router/testing'; // Para simular navegación

describe('AlquilerComponent', () => {
  let component: AlquilerComponent;
  let fixture: ComponentFixture<AlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AlquilerComponent, 
        HttpClientModule, // Proveer HttpClient
        RouterTestingModule, // Simular navegación
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(AlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
