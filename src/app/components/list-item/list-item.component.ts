import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book, Quiz } from '@/models';

export type MessageType = 'searchQuiz' | 'creatQuiz' | 'setRead' | 'createQuiz' | 'readComments' | 'challengeQuiz';

export interface ClickedButtonParams {
  message: MessageType;
  content: Book | Quiz;
}
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() book: Book;
  @Input() quiz: Quiz;
  @Input() isSearch = false;
  @Input() is4Quiz = false;
  @Input() hasNotButtons = false;
  @Output() clicked = new EventEmitter<Book | Quiz>();
  @Output() clickedButton = new EventEmitter<ClickedButtonParams>();

  isBook: boolean;
  constructor() {}

  ngOnInit() {
    this.isBook = this.book && !!this.book.id;
  }

  click() {
    this.clicked.emit(this.isBook ? this.book : this.quiz);
  }
  sendClicked(message: MessageType) {
    const params: ClickedButtonParams = {
      message,
      content: this.isBook ? this.book : this.quiz,
    };
    this.clickedButton.emit(params);
  }
  getQuizStar(): number {
    let star = 0;
    if (this.quiz.comments.length) {
      this.quiz.comments.map(comment => star += comment.star);
      star = Math.round(star / this.quiz.comments.length);
    }
    return star;
  }
  convert2ArrayFromNumber(x: number) {
    return Array(x).keys();
  }
}
