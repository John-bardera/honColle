import { NgModule } from '@angular/core';

import { InitService } from '@/services/init.service';
import { PushService } from '@/services/push.service';

import { BookService } from './book.service';
import { QuizService } from './quiz.service';

@NgModule({
  providers: [
    BookService,
    QuizService,
    PushService,
    InitService,
  ],
})

export class ServicesModule {}
