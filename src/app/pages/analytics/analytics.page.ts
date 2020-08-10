import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BookService } from '@/services';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.page.html',
  styleUrls: ['analytics.page.scss'],
})
export class AnalyticsPage {
  author$: Observable<Array<string>>;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private bookService: BookService,
  ) {
    this.author$ = this.store.pipe(
      select(selectBooks),
      map(books => {
        const author = [];
        books.map(book => {
          book.author.split('/').map(a => {
            if (!author.includes(a)) {
              author.push(a);
            }
          });
        });
        return author;
      })
    );
  }

  onChangePage(author: string) {
    this.bookService.selectedAuthor$.next(author);
    this.router.navigateByUrl('tabs/analytics/graph');
  }
}
