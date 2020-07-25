import { Component } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: Array<Book> = [];
  constructor() {
    /*
    this.books[0] = {
      isbn: '111111',
      title: 'アクタージュ',
      thumbnail: 'data:image/jpeg;base64,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',
      authors: [{ name: 'マツキ タツヤ' }]
    };
    */
  }

}