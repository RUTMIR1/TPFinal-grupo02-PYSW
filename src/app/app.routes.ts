import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'novedades', component: NovedadesComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'usuarios', component:CrudUsuariosComponent},
    { path: '**', redirectTo: 'anuncios', pathMatch: 'full' }
];
