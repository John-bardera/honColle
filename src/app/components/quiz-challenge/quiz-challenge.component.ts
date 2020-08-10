import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Quiz } from '@/models';

@Component({
  selector: 'app-quiz-challenge',
  templateUrl: './quiz-challenge.component.html',
  styleUrls: ['./quiz-challenge.component.scss'],
})
export class QuizChallengeComponent implements OnInit {
  @Input() quiz: Quiz;
  displayedQuestionIndex = 0;
  answers: Array<number>;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.answers = new Array<number>(this.quiz.questions.length).map(x => -1);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  nextQuestionOrFinish() {
    if (this.quiz.questions.length === (this.displayedQuestionIndex + 1)) {
      this.displayedQuestionIndex = -1;
    } else {
      this.displayedQuestionIndex++;
    }
  }
  selectedAnswer(index: 0 | 1 | 2) {
    this.answers[this.displayedQuestionIndex] = index;
  }
}
