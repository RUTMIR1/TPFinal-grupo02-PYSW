import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule
import { ActivatedRoute } from '@angular/router';  // Importar ActivatedRoute
import { HeaderComponent } from './header.component';  // Importar tu componente HeaderComponent

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HttpClientModule],  // Importar el módulo necesario
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { queryParams: {} } }  // Mock de ActivatedRoute
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
