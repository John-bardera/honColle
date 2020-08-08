import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book, Quiz } from '@/models';
import { AppState } from '@/store';
import { setQuiz } from '@/store/quiz.store';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.scss'],
})
export class QuizCreateComponent implements OnInit {
  @Input() theme: Book;
  quiz: Quiz;
  selectedQuestionIndex: number;
  creatingQuestion = false;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {}

  touchQuestion() {
    this.creatingQuestion = true;
  }
  addedQuestion() {
    this.creatingQuestion = false;
  }
  createdQuiz() {
    this.quiz.id = this.quiz.maker + Math.round( Math.random() * 10000000 );
    this.store.dispatch(setQuiz({ quiz: this.quiz }));
  }
}
