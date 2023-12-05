import { Component, Inject, inject } from '@angular/core';
import { MoviesService } from '../list-movies/services/movies.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IMovie } from '../../data/movie.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'watch-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    ItemMovieComponent,
  ],
  providers: [MoviesService],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss',
})
export class WatchListComponent {
  router = inject(Router);
  watchList$: Observable<IMovie[]> = inject(MoviesService).getWatchList();

  onGoToDetail(movie: IMovie) {
    this.router.navigate(['detail'], { queryParams: { id: movie.id } });
  }
}
