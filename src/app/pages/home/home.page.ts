import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '@/models';
import { BookService, InitService } from '@/services';
import { AppState } from '@/store';
import {selectBooks, setBook} from '@/store/book.store';
import {ClickedButtonParams} from '@/components/list-item/list-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books$: Observable<Array<Book>>;
  recommendedBook$: Observable<Book>;
  nowLoading$: Observable<boolean>;
  constructor(
    private store: Store<AppState>,
    private bookService: BookService,
    private initService: InitService,
  ) {
    this.books$ = this.store.pipe(select(selectBooks));
    this.recommendedBook$ = this.bookService.recommendBook();
    this.nowLoading$ = this.initService.nowLoading$;
  }
  sortedBooks(books: Array<Book>) {
    return books.sort((a, b) => a.title > b.title ? 1 : -1);
  }
  clickedButton(ev: ClickedButtonParams) {
    if (ev.message === 'setRead') {
      this.store.dispatch(setBook({ book: {...ev.content, isRead: true} }));
    } else if (ev.message === 'searchQuiz') {
      console.log('');
    } else if (ev.message === 'creatQuiz') {
      console.log('');
    }
  }
}
