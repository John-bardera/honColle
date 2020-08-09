import { NgModule } from '@angular/core';

import { PushService } from '@/services/push.service';

import { BookService } from './book.service';
import { QuizService } from './quiz.service';

@NgModule({
  providers: [
    BookService,
    QuizService,
    PushService,
  ],
})

export class ServicesModule {}
