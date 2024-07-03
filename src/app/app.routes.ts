import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'novedades', component: NovedadesComponent },
    { path: '**', redirectTo: 'anuncios', pathMatch: 'full' }
];
