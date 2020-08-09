import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Quiz } from '@/models';
import { QuizService } from '@/services/quiz.service';

@Component({
  selector: 'app-quiz-top',
  templateUrl: './quiz-top.page.html',
  styleUrls: ['./quiz-top.page.scss'],
})
export class QuizTopPage implements OnInit {
  quizzes$: Observable<Array<Quiz>>;

  constructor(
    private quizService: QuizService,
  ) {
    this.quizzes$ = this.quizService.getSortedQuizzes();
  }

  ngOnInit() {
  }

}
