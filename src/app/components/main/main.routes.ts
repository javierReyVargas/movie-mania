import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ListMoviesComponent } from '../list-movies/list-movies.component';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { WatchListComponent } from '../watch-list/watch-list.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ListMoviesComponent,
      },
      {
        path: 'detail',
        component: DetailMovieComponent,
      },
      {
        path: 'watchlist',
        component: WatchListComponent,
      },
    ],
  },
];
