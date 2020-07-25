import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage {

  selectedtab: string;

  constructor() {
    this.selectedtab = 'challenge';
  }

  onSelectTab(tab: string){
    this.selectedtab = tab;
  }

}

