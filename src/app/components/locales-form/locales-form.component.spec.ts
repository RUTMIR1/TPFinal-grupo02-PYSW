import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { LocalesFormComponent } from './locales-form.component';
import { ToastrModule } from 'ngx-toastr'; // Importa ToastrModule

describe('LocalesFormComponent', () => {
  let component: LocalesFormComponent;
  let fixture: ComponentFixture<LocalesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LocalesFormComponent, 
        RouterTestingModule, 
        HttpClientTestingModule, // Agregar HttpClientTestingModule para proveer HttpClient
        ToastrModule.forRoot() // Asegúrate de incluir ToastrModule en las pruebas
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: {} } }, // Mock de ActivatedRoute
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
