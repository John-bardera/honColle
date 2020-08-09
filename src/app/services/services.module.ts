import { NgModule } from '@angular/core';

import { BookService } from './book.service';
import { QuizService } from './quiz.service';
import {PushService} from '@/services/push.service';

@NgModule({
  providers: [
    BookService,
    QuizService,
    PushService,
  ],
})

export class ServicesModule {}
