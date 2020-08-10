import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClickedButtonParams } from '@/components/list-item/list-item.component';
import { QuizCreateComponent } from '@/components/quiz-create/quiz-create.component';
import { Book } from '@/models';
import { BookService, InitService } from '@/services';
import { AppState } from '@/store';
import { selectBooks, setBook } from '@/store/book.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books$: Observable<Array<Book>>;
  recommendedBook$: Observable<Book>;
  nowLoading$: Observable<boolean>;
  enableRecommendBooks$: Observable<boolean>;
  constructor(
    private modalCtrl: ModalController,
    private store: Store<AppState>,
    private bookService: BookService,
    private initService: InitService,
  ) {
    this.books$ = this.store.pipe(select(selectBooks));
    this.enableRecommendBooks$ = this.bookService.enableRecommendBooks$;
    this.recommendedBook$ = this.bookService.recommendBook();
    this.nowLoading$ = this.initService.nowLoading$;
  }
  sortedBooks(books: Array<Book>) {
    return books.sort((a, b) => a.title > b.title ? 1 : -1);
  }
  async clickedButton(ev: ClickedButtonParams) {
    if (ev.message === 'setRead') {
      this.store.dispatch(setBook({ book: {...(ev.content as Book), isRead: true} }));
    } else if (ev.message === 'searchQuiz') {
      console.log('');
    } else if (ev.message === 'createQuiz') {
      const modal = await this.modalCtrl.create({
        component: QuizCreateComponent,
        componentProps: {
          theme: ev.content as Book,
        },
      });
      await modal.present();
    }
  }
}
