import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlquilerComponent } from './components/alquiler/alquiler.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlquilerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TpFinal-grupo02-GaleriaComercial';
}
