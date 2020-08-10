import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { ClickedButtonParams } from '@/components/list-item/list-item.component';
import { QuizChallengeComponent } from '@/components/quiz-challenge/quiz-challenge.component';
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
    private modalCtrl: ModalController,
    private quizService: QuizService,
  ) {
    this.quizzes$ = this.quizService.getSortedQuizzes();
  }

  ngOnInit() {
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
