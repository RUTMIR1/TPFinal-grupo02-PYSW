import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { LocalesListComponent } from './components/locales-list/locales-list.component';
import { LocalesFormComponent } from './components/locales-form/locales-form.component';

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
      path: '', redirectTo: '/home', pathMatch: 'full' 
    },
    { 
      path: '**', component: HomeComponent 
    }

];
