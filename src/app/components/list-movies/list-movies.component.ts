import { Component, computed, inject } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';
import { MoviesService } from './services/movies.service';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../data/movie.model';
import { SortComponent } from '../sort/sort.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    ItemMovieComponent,
    SortComponent,
    CommonModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss',
})
export class ListMoviesComponent {
  moviesService = inject(MoviesService);
  router = inject(Router);
  initialFieldOrder: keyof IMovie = 'title';
  initialOrder: 1 | -1 = -1;

  arrAllMovies = computed(() => this.moviesService.arrMovies());
  onGoToDetail(movie: IMovie) {
    this.router.navigate(['detail'], { queryParams: { id: movie.id } });
  }
  onAddToWhatchList(movieToAdd: IMovie) {
    this.moviesService.addMovieToWatchList(movieToAdd);
  }
  onOrderBy(field: keyof IMovie = 'title', order: 1 | -1 = this.initialOrder) {
    this.initialFieldOrder = field;

    // this.moviesService$ = this.moviesService
    //   .getListMovies()
    //   .pipe(
    //     map((movie: IMovie[]) =>
    //       movie.sort(
    //         (a: IMovie, b: IMovie) =>
    //           (a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0) * order
    //       )
    //     )
    //   );
  }
  onChangeOrder(event: any) {
    this.initialOrder = event;
    this.onOrderBy(this.initialFieldOrder, this.initialOrder);
  }
}
