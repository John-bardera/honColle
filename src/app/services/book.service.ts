import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { applicationId } from '../config';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';

  constructor(
    private http: HttpClient,
  ) { }

  searchFromGlobal(q: string) {
    const body = {
      format: 'json',
      applicationId,
      title: 'アクタージュ'
    };
    this.http.post(this.url, { body }).subscribe(_ => {
      console.log(_);
    });
  }
}
