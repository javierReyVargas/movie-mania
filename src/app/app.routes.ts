import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main/main.routes').then((m) => m.MAIN_ROUTES),
  },
];
