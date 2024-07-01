import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, LoginComponent, AnunciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TpFinal-grupo02-GaleriaComercial';
}
