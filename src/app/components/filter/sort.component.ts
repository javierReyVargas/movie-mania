import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'sort',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  fields = [
    {
      name: 'title',
      value: 'Title',
    },
    {
      name: 'Released Date',
      value: 'released_date',
    },
  ];
  arrOrder = ['asc', 'desc'];
}
