import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { Book } from '@/models';
import { BookService } from '@/services';
import { AppState } from '@/store';
import { setSearchBooks } from '@/store/book.store';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  q = '';

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private alertCtrl: AlertController,
    private bookService: BookService,
  ) { }
  search() {
    this.bookService.parseQueryOfSearchFromGlobalAndSearch(this.q).subscribe((books: Array<Book>) => {
      this.store.dispatch(setSearchBooks({ books }));
      this.router.navigateByUrl('tabs/search/result');
    },
    async error => {
      const alert = await this.alertCtrl.create({
        message: '検索結果が多すぎます。\nより詳細に条件を設定してください',
        buttons: [{
          text: 'OK',
          handler: () => {},
        }]
      });
      await alert.present();
    });
  }
}
