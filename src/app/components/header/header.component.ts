import { Component, computed, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoviesService } from '../list-movies/services/movies.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  moviesService = inject(MoviesService);
  totalMovies = computed(() => this.moviesService.numberOfMoviesInWatchList());
}
