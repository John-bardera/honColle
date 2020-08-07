import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '@/models';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books$: Observable<Array<Book>>;
  constructor(
    private store: Store<AppState>,
  ) {
    this.books$ = this.store.pipe(select(selectBooks));
  }
  sortedBooks(books: Array<Book>) {
    return books.sort((a, b) => a.title > b.title ? 1 : -1);
  }
}
