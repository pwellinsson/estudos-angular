import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    /* Rota vazia que redireciona para o componente Home
    {   path: '',
        component: HomeComponent},*/
    {   path: 'home',
        component: HomeComponent}
];
