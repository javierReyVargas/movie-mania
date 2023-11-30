import { Component, OnInit, inject } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';
import { MoviesService } from './services/movies.service';
import { Observable, map, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IMovie } from '../data/movie.model';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [ItemMovieComponent, HttpClientModule, CommonModule],
  providers: [MoviesService],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss',
})
export class ListMoviesComponent {
  moviesService$: Observable<IMovie[]> = inject(MoviesService).getListMovies();
}
