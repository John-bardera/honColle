import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '@/models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() book: Book;
  @Input() isSearch = false;
  @Output() clicked = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {}

  click() {
    this.clicked.emit(this.book);
  }
}
