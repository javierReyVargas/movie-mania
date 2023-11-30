import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
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
          return {
            ...response,
            onWatchList: false,
            id: index + 1,
          };
        });
        return response;
      })
    );
  }
}
