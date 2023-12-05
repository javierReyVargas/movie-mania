import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Main',
    loadChildren: () =>
      import('./components/main/main.routes').then((m) => m.MAIN_ROUTES),
  },
];
