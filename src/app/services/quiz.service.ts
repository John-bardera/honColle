import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '@/store';
import { selectQuizzes } from '@/store/quiz.store';

import { QUIZZES } from '../mock/mock-quizzes';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private store: Store<AppState>
  ) { }

  getQuizzes(): Quiz[] {
    return QUIZZES;
  }
  getSortedQuizzes(): Observable<Array<Quiz>> {
    return this.store.pipe(
      select(selectQuizzes),
      map(quizzes => quizzes.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1))
    );
  }
}
