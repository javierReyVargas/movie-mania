import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ListMoviesComponent } from '../list-movies/list-movies.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ListMoviesComponent,
      },
    ],
  },
];
