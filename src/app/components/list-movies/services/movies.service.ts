import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, signal } from '@angular/core';
import { map } from 'rxjs';
import { IMovie } from '../../../data/movie.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  arrMoviesInLocalStorage = signal<IMovie[]>([]);
  numberOfMoviesInWatchList = computed(
    () =>
      this.arrMoviesInLocalStorage().filter(
        (movie: IMovie) => movie.onWatchList
      ).length
  );

  url = 'assets/movies.json';
  constructor(private http: HttpClient) {
    this.arrMoviesInLocalStorage.update(() =>
      JSON.parse(this.getMoviesFromLocalStorage() || '[]')
    );
  }

  arrMovies: Signal<IMovie[] | undefined> = toSignal(
    this.http.get<IMovie[]>(this.url).pipe(
      map((response: IMovie[]) => {
        response = response.map((response: IMovie, index: number) => {
          return {
            ...response,
            onWatchList: this.arrMoviesInLocalStorage().find(
              (movie: IMovie) => movie.id === index + 1
            )
              ? true
              : false,
            id: index + 1,
          };
        });
        return response;
      })
    )
  );

  addMovieToWatchList(movie: IMovie) {
    movie.onWatchList = true;
    this.arrMoviesInLocalStorage.update((movies) => [...movies, movie]);
    localStorage.setItem(
      'movies',
      JSON.stringify(this.arrMoviesInLocalStorage())
    );
  }

  removeMovieToWatchList(movie: IMovie) {
    movie.onWatchList = false;
    this.arrMoviesInLocalStorage.update((movies) =>
      movies.filter((m: IMovie) => m.id !== movie.id)
    );
    localStorage.setItem(
      'movies',
      JSON.stringify(this.arrMoviesInLocalStorage())
    );
  }

  private getMoviesFromLocalStorage() {
    return localStorage.getItem('movies');
  }
}
