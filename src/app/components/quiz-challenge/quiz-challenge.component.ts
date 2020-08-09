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

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
