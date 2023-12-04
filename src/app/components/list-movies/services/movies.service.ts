import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IMovie } from '../../data/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private numMovies: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  numberOfMovies$ = this.numMovies.asObservable();

  url = '/assets/movies.json';
  constructor(private http: HttpClient) {}

  getListMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.url).pipe(
      map((response: IMovie[]) => {
        response = response.map((response: IMovie, index: number) => {
          const localList = JSON.parse(
            this.getMoviesFromLocalStorage() || '[]'
          );
          this.numMovies.next(localList.length);
          return {
            ...response,
            onWatchList: localList.find(
              (movie: IMovie) => movie.id === index + 1
            )
              ? true
              : false,
            id: index + 1,
          };
        });
        return response;
      })
    );
  }

  addMovieToWatchList(movie: IMovie) {
    movie.onWatchList = true;
    const currentList = this.getMoviesFromLocalStorage() || '[]';
    const movies = JSON.parse(currentList);
    movies.push(movie);
    this.numMovies.next(movies.length);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  removeMovieToWatchList(movie: IMovie) {
    movie.onWatchList = false;
    const currentList = this.getMoviesFromLocalStorage() || '[]';
    const movies = JSON.parse(currentList);
    movies.splice(movies.indexOf(movie), 1);
    this.numMovies.next(movies.length);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  private getMoviesFromLocalStorage() {
    return localStorage.getItem('movies');
  }

  getMovieById(id: number): Observable<IMovie> {
    return this.getListMovies().pipe(
      map((movies: IMovie[]) => {
        return (
          movies.find((movie: IMovie) => {
            return movie.id === id;
          }) ?? ({} as IMovie)
        );
      })
    );
  }

  getWatchList(): Observable<IMovie[]> {
    return this.getListMovies().pipe(
      map((movies: IMovie[]) =>
        movies.filter((movie: IMovie) => movie.onWatchList)
      )
    );
  }
}
