import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '@/models';

export interface ClickedButtonParams {
  message: string;
  content: Book;
}
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() book: Book;
  @Input() isSearch = false;
  @Input() is4Quiz = false;
  @Input() hasNotButtons = false;
  @Output() clicked = new EventEmitter<Book>();
  @Output() clickedButton = new EventEmitter<ClickedButtonParams>();

  constructor() { }

  ngOnInit() {}

  click() {
    this.clicked.emit(this.book);
  }
  sendClicked(message: string) {
    const params: ClickedButtonParams = {
      message,
      content: this.book,
    };
    this.clickedButton.emit(params);
  }
}
