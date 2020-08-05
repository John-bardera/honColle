import { Injectable } from '@angular/core';

import {Quiz} from './quiz';
import {QUIZZES} from './mock-quizzes'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes(): Quiz[]{
    return QUIZZES;
  }
}
