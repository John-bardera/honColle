import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '@/models';
import { BookService } from '@/services';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-quiz-create-search',
  templateUrl: './quiz-create-search.page.html',
  styleUrls: ['./quiz-create-search.page.scss'],
})
export class QuizCreateSearchPage implements OnInit {
  searchedBooks$: Observable<Array<Book>>;

  constructor(
    private store: Store<AppState>,
    private bookService: BookService,
  ) {
    this.searchedBooks$ =　this.store.pipe(select(selectBooks));
  }

  ngOnInit() {
  }
  async searchBooks(ev: any) {
    const value = ev.target.value; // イベントを発生させたオブジェクトのvalueつまり入力した文字
    this.searchedBooks$ = value ? this.bookService.searchFromLocalStore(value) : this.store.pipe(select(selectBooks));
  }
  onMake(make: string) {
    return;
  }
}
