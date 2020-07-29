import { Component } from '@angular/core';
import {BookService} from '../../services';

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
    this.bookService.searchFromGlobal(this.q);
  }
}
