// app.component.ts
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { LocalesFormComponent } from './components/locales-form/locales-form.component';
import { LocalesListComponent } from './components/locales-list/locales-list.component';
import { CrudNovedadesComponent } from './components/crud-novedades/crud-novedades.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component'; // Importa tu componente aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CrudUsuariosComponent,
    LoginComponent,
    NovedadesComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LocalesFormComponent,
    LocalesListComponent,
    AlquilerComponent,
    HttpClientModule,
    CrudNovedadesComponent,
    EstadisticaComponent // Asegúrate de incluirlo aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TpFinal-grupo02-GaleriaComercial';
}