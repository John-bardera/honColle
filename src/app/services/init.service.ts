import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { BookService } from '@/services/book.service';
import { PushService } from '@/services/push.service';
import { QuizService } from '@/services/quiz.service';
import { AppState } from '@/store';

@Injectable()
export class InitService {
  nowLoading$ = new BehaviorSubject(true);
  loading: HTMLIonLoadingElement;
  constructor(
    private loadingCtrl: LoadingController,
    private store: Store<AppState>,
    private bookService: BookService,
    private quizService: QuizService,
    private pushService: PushService,
  ) { }

  async initOther() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.nowLoading$.next(true);
    this.bookService.initBooks().then(_ => {
      this.quizService.initQuizzes();
      this.pushService.requestPermission().then(_ => {
        this.setNowLoading(false);
        this.loading.dismiss();
      });
    });
  }
  setNowLoading(bool: boolean) {
    this.nowLoading$.next(bool);
  }
}
