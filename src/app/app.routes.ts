import { Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Five Coffee House | Café, sabor e momentos especiais',
    component: LandingComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
