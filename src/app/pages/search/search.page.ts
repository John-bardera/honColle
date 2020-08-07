import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Book } from '@/models';
import { BookService } from '@/services';
import { AppState } from '@/store';
import { setSearchBooks } from '@/store/book.store';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  q = '';

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private bookService: BookService,
  ) { }
  search() {
    this.bookService.parseQueryOfSearchFromGlobalAndSearch(this.q).subscribe((books: Array<Book>) => {
      this.store.dispatch(setSearchBooks({ books }));
      this.router.navigateByUrl('tabs/search/result');
    });
  }
}
