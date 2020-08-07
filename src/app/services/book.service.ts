import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book, BookApiResponse, ParsedBookApiResponse } from '@/models';

import { affiliateId, applicationId, searchBoundaryValue } from '../config';

@Injectable()
export class BookService {
  url = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';

  constructor(
    private http: HttpClient,
  ) { }

  parseQueryOfSearchFromGlobalAndSearch(q: string): Observable<Array<Book>> {
    return this.searchFromGlobal(q).pipe(map(res => {
      if (res.count > searchBoundaryValue) {
        throwError('Hits over search Boundary Value.');
      }
      return res.books.sort((a, b) => a.title > b.title ? 1 : -1);
    }));
  }
  searchFromGlobal(q: string): Observable<ParsedBookApiResponse> {
    const params = {
      format: 'json',
      applicationId,
      affiliateId,
      title: q,
      // author: 'アクタージュ',
      hits: '100',
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
}
