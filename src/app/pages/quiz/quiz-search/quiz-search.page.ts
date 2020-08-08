import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  constructor(
    private store: Store<AppState>,
    private quizService: QuizService,
  ) {
    this.searchedQuizzes$ = this.store.pipe(select(selectQuizzes));
  }

  ngOnInit() {
  }

  async searchQuizzes(ev: any) {
    const value = ev.target.value; // イベントを発生させたオブジェクトのvalueつまり入力した文字
    this.searchedQuizzes$ = value ? this.quizService.searchQuizzes(value) : this.store.pipe(select(selectQuizzes));
  }
}
