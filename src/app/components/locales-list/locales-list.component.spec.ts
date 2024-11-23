import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Para las pruebas con HTTP
import { ToastrModule } from 'ngx-toastr';  // Importar ToastrModule
import { LocalesListComponent } from './locales-list.component';

describe('LocalesListComponent', () => {
  let component: LocalesListComponent;
  let fixture: ComponentFixture<LocalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LocalesListComponent,  // El componente bajo prueba
        HttpClientTestingModule,  // Agregar HttpClientTestingModule para las pruebas
        ToastrModule.forRoot(),  // Agregar el módulo Toastr
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
