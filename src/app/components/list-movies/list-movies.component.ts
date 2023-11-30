import { Component } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [ItemMovieComponent],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss',
})
export class ListMoviesComponent {}
