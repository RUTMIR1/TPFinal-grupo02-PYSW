import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistroComponent } from './components/registro/registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FooterComponent,HeaderComponent, LoginComponent, NovedadesComponent,RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TpFinal-grupo02-GaleriaComercial';
}
