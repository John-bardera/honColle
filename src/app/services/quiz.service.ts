import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QUIZZES } from '@/mock/mock-quizzes';
import { Quiz } from '@/models';
import { BookService } from '@/services/book.service';
import { AppState } from '@/store';
import { setBook } from '@/store/book.store';
import { selectQuizzes, setQuiz } from '@/store/quiz.store';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private store: Store<AppState>,
    private bookService: BookService,
  ) { }

  initQuizzes() {
    QUIZZES.map(quiz => {
      this.bookService.parseQueryOfSearchFromGlobalAndSearch(quiz.book.isbn, true)
        .subscribe(book => {
          if (book.length) {
            this.store.dispatch(setBook({ book: { ...book[0], id: book[0].isbn } }));
            quiz.book = book[0];
            quiz.book.id = quiz.book.isbn;
            this.store.dispatch(setQuiz({ quiz }));
          }
        });
    });
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
