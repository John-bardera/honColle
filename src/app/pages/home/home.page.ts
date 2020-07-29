import { Component } from '@angular/core';

import { Book } from '@/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: Array<Book> = [];
  constructor() {}

}
