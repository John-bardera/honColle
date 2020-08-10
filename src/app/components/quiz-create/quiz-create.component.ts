import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { Book, Question, Quiz } from '@/models';
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
  newQuestion: Question;
  selectedQuestionIndex = -1;
  creatingQuestion = false;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.quiz =  {
      book: this.theme,
      comments: [],
      id: '',
      maker: '',
      questions: [],
      title: '',
    };
    this.initQuestion();
  }

  initQuestion() {
    this.newQuestion =  {
      choices: ['', '', ''],
      correct: 0,
      text: '',
    };
  }
  touchQuestion() {
    this.creatingQuestion = true;
    this.initQuestion();
  }
  checkQuestion(): boolean {
    return this.newQuestion.correct &&
      this.newQuestion.text &&
      this.newQuestion.choices[0] &&
      this.newQuestion.choices[1] &&
      this.newQuestion.choices[2] && true;
  }
  addedQuestion() {
    this.creatingQuestion = false;
    this.newQuestion.correct--;
    this.quiz.questions.push(this.newQuestion);
  }
  createdQuiz() {
    this.quiz.id = this.quiz.maker + Math.round( Math.random() * 10000000 );
    this.store.dispatch(setQuiz({ quiz: this.quiz }));
    console.log(this.quiz);
    this.dismiss();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async irregularDismiss() {
    const alert = await this.alertCtrl.create({
      message: '途中で終了しても良いですか？\nまだ保存されていません。',
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
  selectQuestion(i: number) {
    this.selectedQuestionIndex = this.selectedQuestionIndex === i ? -1 : i;
  }
  checkQuiz(): boolean {
    return this.quiz.maker &&
      this.quiz.title &&
      this.quiz.questions.length && true;
  }
}
