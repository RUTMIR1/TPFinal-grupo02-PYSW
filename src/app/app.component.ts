import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { LocalesFormComponent } from './components/locales-form/locales-form.component';
import { LocalesListComponent } from './components/locales-list/locales-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,CrudUsuariosComponent, LoginComponent, NovedadesComponent,RegistroComponent,HomeComponent,HeaderComponent,FooterComponent,
            LocalesFormComponent, LocalesListComponent,AlquilerComponent,HttpClientModule
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TpFinal-grupo02-GaleriaComercial';
}
