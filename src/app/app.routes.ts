import { Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    title: 'VAC Implementação De Sistemas LDTA | Seu site, sua conquista digital começa aqui',
    component: LandingComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
