import { Component, Input, OnInit, inject } from '@angular/core';
import { IMovie } from '../data/movie.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../list-movies/services/movies.service';

@Component({
  selector: 'app-detail-movie',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatSlideToggleModule,
    RouterLink,
  ],
  providers: [MoviesService],
  templateUrl: './detail-movie.component.html',
  styleUrl: './detail-movie.component.scss',
})
export class DetailMovieComponent implements OnInit {
  @Input() id!: number;
  movieService = inject(MoviesService);
  movieDetail$!: Observable<IMovie>;
  sanitizer: DomSanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.movieDetail$ = this.movieService.getMovieById(+this.id).pipe(
      map((movie: IMovie) => {
        console.log(movie.trailer as string);
        return {
          ...movie,
          trailer: this.sanitizer.bypassSecurityTrustResourceUrl(
            movie.trailer
          ) as string,
        };
      })
    );
  }
  onChangeWatchList(event: any, movie: IMovie) {
    event.checked
      ? this.movieService.addMovieToWatchList(movie)
      : this.movieService.removeMovieToWatchList(movie);
  }
}
