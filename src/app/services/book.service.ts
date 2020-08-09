import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Book, BookApiResponse, ParsedBookApiResponse } from '@/models';
import { AppState } from '@/store';
import { selectBooks, setBooks } from '@/store/book.store';

import { affiliateId, applicationId, searchBoundaryValue } from '../config';

@Injectable()
export class BookService {
  url = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
  ) { }

  parseQueryOfSearchFromGlobalAndSearch(q: string, byIsbn: boolean = false): Observable<Array<Book>> {
    return this.searchFromGlobal(q, byIsbn).pipe(map(res => {
      if (res.count > searchBoundaryValue) {
        throwError('Hits over search Boundary Value.');
      }
      return res.books.sort((a, b) => a.title > b.title ? 1 : -1);
    }));
  }
  searchFromGlobal(q: string, byIsbn: boolean): Observable<ParsedBookApiResponse> {
    const params = {
      format: 'json',
      applicationId,
      affiliateId,
      ...(byIsbn ? {} : {title: q}),
      // author: 'アクタージュ',
      ...(byIsbn ? {isbn: q} : {}),
      outOfStockFlag: '1',
    };
    return this.http.get<BookApiResponse>(this.url, { params })
      .pipe(
        map((res: BookApiResponse) => {
          return {
            books: res.Items
              .filter(item => item.Item.size)
              .map(item => item.Item)
              .map((book: Book) => {
                book.id = book.isbn;
                return book;
              }),
            count: res.count,
            hits: res.hits,
            page: res.page,
            pageCount: res.pageCount,
          };
        })
      );
  }
  searchFromLocalStore(q: string): Observable<Array<Book>> {
    return this.store.pipe(
      select(selectBooks),
      map((books: Array<Book>) => books.filter(book => book.title.includes(q) || book.author.includes(q)))
    );
  }
  initBooks() {
    this.parseQueryOfSearchFromGlobalAndSearch('アクタージュ').pipe(
      map(books => {
        this.store.dispatch(
          setBooks({
            books: books
              .slice(0, 12)
              .map(book => {
                book.id = book.isbn;
                return book;
              })
          }));
      }),
      take(1)
    ).subscribe();
  }
}
