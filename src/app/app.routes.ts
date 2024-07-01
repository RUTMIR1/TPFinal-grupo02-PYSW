import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'anuncios', component: AnunciosComponent },
    { path: '**', redirectTo: 'anuncios', pathMatch: 'full' }
];
