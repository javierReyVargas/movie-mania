import { Component, inject } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';
import { MoviesService } from './services/movies.service';
import { Observable, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IMovie } from '../data/movie.model';
import { SortComponent } from '../sort/sort.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [ItemMovieComponent, HttpClientModule, SortComponent, CommonModule],
  providers: [MoviesService],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss',
})
export class ListMoviesComponent {
  moviesService = inject(MoviesService);
  router = inject(Router);
  initialFieldOrder: keyof IMovie = 'title';
  initialOrder: 1 | -1 = -1;

  moviesService$: Observable<IMovie[]> = this.moviesService.getListMovies();
  onGoToDetail(movie: IMovie) {
    this.router.navigate(['detail'], { queryParams: { id: movie.id } });
  }
  onAddToWhatchList(movieToAdd: IMovie) {
    this.moviesService.addMovieToWatchList(movieToAdd);
  }
  onOrderBy(field: keyof IMovie = 'title', order: 1 | -1 = 1) {
    this.initialFieldOrder = field;
    this.moviesService$ = this.moviesService
      .getListMovies()
      .pipe(
        map((movie: IMovie[]) =>
          movie.sort(
            (a: IMovie, b: IMovie) =>
              (a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0) * order
          )
        )
      );
  }
  onChangeOrder(event: any) {
    this.initialOrder = event;
    this.onOrderBy(this.initialFieldOrder, this.initialOrder);
  }
}
