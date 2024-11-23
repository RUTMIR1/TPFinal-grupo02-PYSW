import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacebookComponent } from './facebook.component';
import { ToastrModule } from 'ngx-toastr'; // Importar ToastrModule para configurarlo
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule para proveer HttpClient

describe('FacebookComponent', () => {
  let component: FacebookComponent;
  let fixture: ComponentFixture<FacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FacebookComponent,
        ToastrModule.forRoot(), // Configurar ToastrModule para las pruebas
        HttpClientModule, // Importar HttpClientModule para proveer HttpClient
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(FacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
