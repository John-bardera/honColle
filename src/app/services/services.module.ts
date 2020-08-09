import { NgModule } from '@angular/core';

import { BookService } from './book.service';
import { QuizService } from './quiz.service';

@NgModule({
  providers: [
    BookService,
    QuizService,
  ],
})

export class ServicesModule {}
