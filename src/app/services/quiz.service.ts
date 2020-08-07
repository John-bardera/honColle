import { Injectable } from '@angular/core';

import { QUIZZES } from '../mock/mock-quizzes';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes(): Quiz[] {
    return QUIZZES;
  }
}
