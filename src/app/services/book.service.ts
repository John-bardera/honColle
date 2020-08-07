import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book, BookApiResponse, ParsedBookApiResponse } from '@/models';

import { affiliateId, applicationId } from '../config';

@Injectable()
export class BookService {
  url = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';

  constructor(
    private http: HttpClient,
  ) { }

  parseQueryOfSearchFromGlobalAndSearch(q: string): Observable<Array<Book>> {
    return this.searchFromGlobal(q).pipe(map(res => res.books));
  }
  searchFromGlobal(q: string): Observable<ParsedBookApiResponse> {
    const params = {
      format: 'json',
      applicationId,
      affiliateId,
      title: q,
      // author: 'アクタージュ',
      outOfStockFlag: '1',
    };
    return this.http.get<BookApiResponse>(this.url, {params})
      .pipe(
        map((res: BookApiResponse) => {
          return {
            books: res.Items.filter(item => item.Item.size).map(item => item.Item),
            count: res.count,
            hits: res.hits,
            page: res.page,
            pageCount: res.pageCount,
          };
        })
      );
  }
}
