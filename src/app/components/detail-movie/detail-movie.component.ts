import { Component, Input, computed, inject, signal } from '@angular/core';
import { IMovie } from '../../data/movie.model';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../list-movies/services/movies.service';

@Component({
  selector: 'app-detail-movie',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSlideToggleModule, RouterLink],
  templateUrl: './detail-movie.component.html',
  styleUrl: './detail-movie.component.scss',
})
export class DetailMovieComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);
  @Input() set id(id: string) {
    this.idMovie.set(+id);
  }
  idMovie = signal(0);
  movieDetail = computed(
    () =>
      this.movieService.arrMovies()?.filter((movie) => {
        return movie.id == this.idMovie()
          ? {
              ...movie,
              trailer: this.sanitizer.bypassSecurityTrustResourceUrl(
                movie.trailer
              ) as string,
            }
          : null;
      })[0]
  );
  movieService = inject(MoviesService);

  getSafeUrl(url: string = '') {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onChangeWatchList(event: any, movie: IMovie) {
    event.checked
      ? this.movieService.addMovieToWatchList(movie)
      : this.movieService.removeMovieToWatchList(movie);
  }
}
