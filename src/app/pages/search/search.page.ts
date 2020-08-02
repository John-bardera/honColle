import { Component } from '@angular/core';

import { Book } from '@/models';
import { BookService } from '@/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  q = '';

  constructor(
    private router: Router,
    private bookService: BookService,
  ) { }
  search() {
    this.bookService.searchFromGlobal(this.q).subscribe(_ => console.log(_));
    this.router.navigateByUrl('tabs/search/result');
  }
}
