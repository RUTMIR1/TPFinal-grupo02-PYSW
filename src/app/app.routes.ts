import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { LocalesListComponent } from './components/locales-list/locales-list.component';
import { LocalesFormComponent } from './components/locales-form/locales-form.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrudNovedadesComponent } from './components/crud-novedades/crud-novedades.component';
import { AlquilerFormComponent } from './components/alquiler-form/alquiler-form.component';
import { CuotaComponent } from './components/cuota/cuota.component';
import { PagoComponent } from './components/pago/pago.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent 
    },
    {
        path: 'login', component: LoginComponent 
    },
    { 
        path: 'novedades', component: NovedadesComponent 
    },
    { 
        path: 'registro', component: RegistroComponent 
    },
    { 
        path: 'registro/:id', component: RegistroComponent
    },
    {
        path: 'locales-list', component: LocalesListComponent 
    },
    { 
        path: 'locales-form', component: LocalesFormComponent 
    },
    { 
        path: 'locales-form/:id', component: LocalesFormComponent 
    },
    { 
        //para el dueño
        path: 'usuarios', component:CrudUsuariosComponent
    },
    {
        path: 'perfil/:id', component: PerfilComponent
    },
    {
        path: 'alquileres', component: AlquilerComponent
    },
    {
        path: 'crud-novedades', component: CrudNovedadesComponent
    },
    {
        path: 'alquileres-form', component: AlquilerFormComponent
    },
    {
        path: 'alquileres-form/:id', component: AlquilerFormComponent
    },
    {
        path: 'cuota/:id', component: CuotaComponent
    },
    {
        path: 'pago/:id/:idAlquiler', component: PagoComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
