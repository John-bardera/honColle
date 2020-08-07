import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '@/models';
import { AppState } from '@/store';
import { selectSearchedBooks, setBook } from '@/store/book.store';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  books$: Observable<Array<Book>>;

  constructor(
    private store: Store<AppState>,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.books$ = this.store.pipe(select(selectSearchedBooks));
  }
  async selectedBook(book: Book) {
    const alert = await this.alertCtrl.create({
      message: `「${book.title}」を本棚に追加します`,
      buttons: [
        {
          text: '未読として登録',
          handler: async () => {
            book.isRead = false;
            await this.addBookHandler(book);
          }
        },
        {
          text: '既読として登録',
          handler: async () => {
            book.isRead = true;
            await this.addBookHandler(book);
          }
        },
        {
          text: 'キャンセル',
          handler: () => {}
        }
      ]
    });
    await alert.present();
  }
  async addBookHandler(book: Book) {
    const toast = await this.toastCtrl.create({
      message: `「${book.title}」を本棚に追加しました`,
      duration: 3000,
    });
    await this.store.dispatch(setBook({ book }));
    await toast.present();
  }
}
