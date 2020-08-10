import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { Comment, Question, Quiz } from '@/models';
import { AppState } from '@/store';
import { setQuiz } from '@/store/quiz.store';

@Component({
  selector: 'app-quiz-challenge',
  templateUrl: './quiz-challenge.component.html',
  styleUrls: ['./quiz-challenge.component.scss'],
})
export class QuizChallengeComponent implements OnInit {
  @Input() quiz: Quiz;
  @Input() isOnlyComments = false;
  displayedQuestionIndex = 0;
  answers: Array<number>;
  newComment: Comment;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.answers = new Array<number>(this.quiz.questions.length).map(x => -1);
    this.newComment = {
      content: '',
      maker: '',
      star: 0,
    };
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async irregularDismiss() {
    if (this.displayedQuestionIndex === -2 || this.isOnlyComments) {
      this.dismiss();
    } else {
      const alert = await this.alertCtrl.create({
        message: '途中で終了しても良いですか？',
        buttons: [
          {
            text: 'OK',
            handler: () => this.dismiss(),
          },
          {
            text: 'キャンセル',
            handler: () => {}
          }
        ]
      });
      await alert.present();
    }
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
  finishedReview() {
    console.log(this.quiz);
    this.displayedQuestionIndex = -2;
  }
  matchedChoices() {
    let count = 0;
    this.quiz.questions.map((q: Question, index: number) => {
      count += this.answers[index] === q.correct ? 1 : 0;
    });
    return count;
  }
  changedStar(star: number) {
    this.newComment.star = star;
  }
  addComment() {
    const quiz = this.quiz;
    quiz.comments.push(this.newComment);
    this.store.dispatch(setQuiz({ quiz }));
    this.dismiss();
  }
  convert2ArrayFromNumber(x: number) {
    return new Array(x).keys();
  }
}
