import { Component, inject } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';
import { MoviesService } from './services/movies.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IMovie } from '../data/movie.model';
import { SortComponent } from '../filter/sort.component';

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
  moviesService$: Observable<IMovie[]> = this.moviesService.getListMovies();
  onGoToDetail(movie: IMovie) {
    console.log('Moviee:: ', movie);
  }

  onAddToWhatchList(movieToAdd: IMovie) {
    this.moviesService.addMovieToWatchList(movieToAdd);
  }
}
