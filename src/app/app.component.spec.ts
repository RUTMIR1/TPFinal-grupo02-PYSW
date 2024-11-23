import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';  // Importar RouterTestingModule
import { ActivatedRoute } from '@angular/router';  // Importar ActivatedRoute

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,  // Tu componente
        RouterTestingModule,  // Proporcionar el RouterTestingModule para simular las rutas
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: {} } }  // Simular ActivatedRoute
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Cambia 'Hello, TpFinal-grupo02-GaleriaComercial' por 'Galeria Comercial'
    expect(compiled.querySelector('h1')?.textContent).toContain('Galeria Comercial');
  });
});
