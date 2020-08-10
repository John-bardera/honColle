import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClickedButtonParams } from '@/components/list-item/list-item.component';
import { QuizCreateComponent } from '@/components/quiz-create/quiz-create.component';
import { Book, Quiz } from '@/models';
import { BookService } from '@/services';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-quiz-create-search',
  templateUrl: './quiz-create-search.page.html',
  styleUrls: ['./quiz-create-search.page.scss'],
})
export class QuizCreateSearchPage implements OnInit {
  searchedBooks$: Observable<Array<Book>>;

  constructor(
    private modalCtrl: ModalController,
    private store: Store<AppState>,
    private bookService: BookService,
  ) {
    this.searchedBooks$ =　this.store.pipe(select(selectBooks));
  }

  ngOnInit() {
  }
  async searchBooks(ev: any) {
    const value = ev.target.value; // イベントを発生させたオブジェクトのvalueつまり入力した文字
    this.searchedBooks$ = value ? this.bookService.searchFromLocalStore(value) : this.store.pipe(select(selectBooks));
  }
  async clickedButtons(ev: ClickedButtonParams) {
    const modal = await this.modalCtrl.create({
      component: QuizCreateComponent,
      componentProps: {
        theme: ev.content as Book,
      },
    });
    await modal.present();
  }
}
