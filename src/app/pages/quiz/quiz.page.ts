import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage {

  selectedtab: string;
  selectedQ: string;
  selectedmake: string;

  constructor() {
    this.selectedtab = 'make';
    this.selectedQ = '0';
    this.selectedmake = '3';
  }

  onSelectTab(tab: string){
    this.selectedtab = tab;
  }
  
  onNext(question: string){
    this.selectedQ = question;
  }

  onMake(make: string){
    this.selectedmake = make;
  }
}

