import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'sort',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  @Output() changeTitle = new EventEmitter<any>();
  @Output() changeOrder = new EventEmitter<any>();
  fields = [
    {
      name: 'Title',
      value: 'title',
    },
    {
      name: 'Released Date',
      value: 'released_date',
    },
  ];
  arrOrder = [
    {
      name: 'ASC',
      value: 1,
    },
    {
      name: 'DESC',
      value: -1,
    },
  ];

  onChangeTitle(event: any) {
    this.changeTitle.emit(event.value);
  }
  onChangeOrder(event: any) {
    this.changeOrder.emit(event.value);
  }
}
