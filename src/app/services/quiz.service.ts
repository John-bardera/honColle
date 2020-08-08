import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QUIZZES } from '@/mock/mock-quizzes';
import { Quiz } from '@/models';
import { AppState } from '@/store';
import { selectQuizzes } from '@/store/quiz.store';

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
  searchQuizzes(q: string): Observable<Array<Quiz>> {
    return this.store.pipe(
      select(selectQuizzes),
      map((quizzes: Array<Quiz>) => quizzes.filter(
        quiz =>
          quiz.title.includes(q) ||
          quiz.maker.includes(q) ||
          quiz.book.title.includes(q) ||
          quiz.book.author.includes(q)
      ))
    );
  }
}
