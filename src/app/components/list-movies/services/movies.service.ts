import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMovie } from '../../data/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = '/assets/movies.json';
  constructor(private http: HttpClient) {}

  getListMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.url).pipe(
      map((response: IMovie[]) => {
        response = response.map((response: IMovie, index: number) => {
          const localList = JSON.parse(
            this.getMoviesFromLocalStorage() || '[]'
          );
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
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  private getMoviesFromLocalStorage() {
    return localStorage.getItem('movies');
  }
}
