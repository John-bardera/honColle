import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClickedButtonParams } from '@/components/list-item/list-item.component';
import { QuizCreateComponent } from '@/components/quiz-create/quiz-create.component';
import { Book } from '@/models';
import { BookService, InitService, QuizService } from '@/services';
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
    private router: Router,
    private store: Store<AppState>,
    private bookService: BookService,
    private initService: InitService,
    private quizService: QuizService,
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
      this.store.dispatch(setBook({ book: {...ev.content, isRead: true} }));
    } else if (ev.message === 'searchQuiz') {
      this.quizService.selectedBooksIsbn$.next((ev.content as Book).isbn);
      this.quizService.hasInitSegment$.next(true);
      await this.router.navigateByUrl('tabs/quiz');
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
