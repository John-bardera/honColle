import { Component, } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

import { Book } from '@/models';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.page.html',
  styleUrls: ['analytics.page.scss'],
})
export class AnalyticsPage {
  author$: Observable<Array<String>>;
  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.author$ = this.store.pipe(
      select(selectBooks),
      map(books => {
        const author = [];
        books.map(book => {
          if(!author.includes(book.author)){
            author.push(book.author);
          }
        })
        return author;
      })
    )
  }

  onChangePage(){
    this.router.navigateByUrl('tabs/analytics/graph');
  }
}
