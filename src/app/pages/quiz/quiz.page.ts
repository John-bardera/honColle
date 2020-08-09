import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { QuizService } from '@/services/quiz.service';
import { AppState } from '@/store';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage implements OnInit {
  segment: 'top' | 'challenge' | 'create' = 'top';
  constructor(
    private store: Store<AppState>,
    private quizService: QuizService,
  ) { }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }
}

