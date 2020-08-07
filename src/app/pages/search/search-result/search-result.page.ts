import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '@/models';
import { AppState } from '@/store';
import { selectSearchedBooks } from '@/store/book.store';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  books$: Observable<Array<Book>>;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.books$ = this.store.pipe(select(selectSearchedBooks));
  }
}
