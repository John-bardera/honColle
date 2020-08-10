import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { QuizService } from '@/services/quiz.service';
import { AppState } from '@/store';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage implements OnInit {
  segment: 'top' | 'challenge' | 'create' = 'top';
  hasInitSegment$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private quizService: QuizService,
  ) {
    this.hasInitSegment$ = this.quizService.hasInitSegment$;
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
    this.quizService.hasInitSegment$.next(false);
  }
  getInitSegmentValue() {
    if (this.quizService.selectedBooksIsbn$.value) {
      this.segment = 'challenge';
      return 'challenge';
    } else {
      this.segment = 'top';
      return 'top';
    }
  }
}

