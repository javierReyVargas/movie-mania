import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../list-movies/list-movies.component').then(
            (m) => m.ListMoviesComponent
          ),
      },
      {
        path: 'detail',
        loadComponent: () =>
          import('../detail-movie/detail-movie.component').then(
            (m) => m.DetailMovieComponent
          ),
      },
      {
        path: 'watchlist',
        loadComponent: () =>
          import('../watch-list/watch-list.component').then(
            (m) => m.WatchListComponent
          ),
      },
    ],
  },
];
