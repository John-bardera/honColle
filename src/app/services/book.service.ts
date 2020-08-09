import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

import { Book, BookApiResponse, ParsedBookApiResponse } from '@/models';
import { AppState } from '@/store';
import { selectBooks, setBook, setBooks } from '@/store/book.store';

import { affiliateId, applicationId, enableRecommendBooks, searchBoundaryValue } from '../config';

@Injectable()
export class BookService {
  url = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';
  enableRecommendBooks$ = new BehaviorSubject(enableRecommendBooks);

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
  ) { }

  parseQueryOfSearchFromGlobalAndSearch(q: string, byIsbn: boolean = false, byAuthor: boolean = false): Observable<Array<Book>> {
    return this.searchFromGlobal(q, byIsbn, byAuthor).pipe(map(res => {
      if (res.count > searchBoundaryValue) {
        throwError('Hits over search Boundary Value.');
      }
      return res.books.sort((a, b) => a.title > b.title ? 1 : -1);
    }));
  }
  searchFromGlobal(q: string, byIsbn: boolean, byAuthor: boolean): Observable<ParsedBookApiResponse> {
    const params = {
      format: 'json',
      applicationId,
      affiliateId,
      ...(byIsbn || byAuthor ? {} : {title: q}),
      ...(byAuthor && !byIsbn ? {author: q} : {}),
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
  async initBooks() {
    return await this.parseQueryOfSearchFromGlobalAndSearch('アクタージュ').pipe(
      map(async searchedBooks => {
        const books = searchedBooks
          .slice(0, 2)
          .map(book => {
            book.id = book.isbn;
            return book;
          });
        await this.store.dispatch(setBooks({ books }));
      })
    ).toPromise().then(async _ => {
      await this.parseQueryOfSearchFromGlobalAndSearch('コンダクター').pipe(
        map(async searchedBooks => {
          const book = searchedBooks[1];
          book.id = book.isbn;
          await this.store.dispatch(setBook({ book }));
        })
      ).toPromise();
    });
  }
  recommendBook(): Observable<Book> {
    const isbnHasBooks = [];
    return this.store.pipe(
      select(selectBooks),
      map((books: Array<Book>) => {
        books.map(book => isbnHasBooks.push(book.isbn));
        return books.length ? books[Math.floor(Math.random() * books.length)].author : '神永学';
      }),
      mergeMap((q: string) => {
        return this.parseQueryOfSearchFromGlobalAndSearch(q.split('/')[0], false, true);
      }),
      map((books: Array<Book>) => {
        return books.filter(book => !isbnHasBooks.includes(book.isbn))[0];
      })
    );
  }
}
