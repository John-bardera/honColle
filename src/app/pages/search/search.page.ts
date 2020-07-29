import { Component } from '@angular/core';

import { Book } from '@/models';
import { BookService } from '@/services';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  q = '';

  constructor(
    private bookService: BookService,
  ) { }
  search() {
    this.bookService.searchFromGlobal(this.q).subscribe(_ => console.log(_));
  }
}
