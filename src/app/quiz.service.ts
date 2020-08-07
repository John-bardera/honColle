import { Injectable } from '@angular/core';

import { QUIZZES } from './mock-quizzes';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes(): Quiz[] {
    return QUIZZES;
  }
}
