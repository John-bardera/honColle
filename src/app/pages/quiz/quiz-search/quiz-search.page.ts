import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClickedButtonParams } from '@/components/list-item/list-item.component';
import { QuizChallengeComponent } from '@/components/quiz-challenge/quiz-challenge.component';
import { Quiz } from '@/models';
import { QuizService } from '@/services/quiz.service';
import { AppState } from '@/store';
import { selectQuizzes } from '@/store/quiz.store';

@Component({
  selector: 'app-quiz-search',
  templateUrl: './quiz-search.page.html',
  styleUrls: ['./quiz-search.page.scss'],
})
export class QuizSearchPage implements OnInit {
  searchedQuizzes$: Observable<Array<Quiz>>;
  value: string;

  constructor(
    private modalCtrl: ModalController,
    private store: Store<AppState>,
    private quizService: QuizService,
  ) {
    this.searchedQuizzes$ = this.store.pipe(select(selectQuizzes));
    this.quizService.selectedBooksIsbn$.subscribe(value => {
      if (value) {
        this.value = value;
        this.searchedQuizzes$ = this.quizService.searchQuizzesByIsbn(value);
      }
    });
  }

  ngOnInit() {
  }

  async searchQuizzes(ev: any) {
    this.value = ev.target.value; // イベントを発生させたオブジェクトのvalueつまり入力した文字
    if (this.quizService.hasInitSegment$.value) {
      this.quizService.hasInitSegment$.next(false);
      this.quizService.selectedBooksIsbn$.next('');
    }
    this.searchedQuizzes$ = this.value ? this.quizService.searchQuizzes(this.value) : this.store.pipe(select(selectQuizzes));
  }
  async clickedButtons(ev: ClickedButtonParams) {
    const modal = await this.modalCtrl.create({
      component: QuizChallengeComponent,
      componentProps: {
        quiz: ev.content as Quiz,
        isOnlyComments: ev.message === 'readComments'
      },
    });
    await modal.present();
  }
}
