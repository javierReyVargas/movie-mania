import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'item-movie',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './item-movie.component.html',
  styleUrl: './item-movie.component.scss',
})
export class ItemMovieComponent {
  @Input() onWatchList: boolean = false;
  @Input() urlImage!: string;
  @Input() title: string = '';
  @Input() description: string = '';
}
