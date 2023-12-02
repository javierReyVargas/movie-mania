import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IMovie } from '../data/movie.model';

@Component({
  selector: 'item-movie',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './item-movie.component.html',
  styleUrl: './item-movie.component.scss',
})
export class ItemMovieComponent {
  @Input() movie!: IMovie;
  @Output() goToDetail = new EventEmitter();
  @Output() addToWatchList = new EventEmitter();

  onAddToWhatchList() {
    this.addToWatchList.emit(this.movie);
  }
  onGoToDetail() {
    this.goToDetail.emit(this.movie);
  }
}
