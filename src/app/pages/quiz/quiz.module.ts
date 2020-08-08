import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '@/components/components.module';
import { QuizCreateSearchPageModule } from '@/pages/quiz/quiz-create-search/quiz-create-search.module';
import { QuizCreateSearchPage } from '@/pages/quiz/quiz-create-search/quiz-create-search.page';
import { QuizSearchPage } from '@/pages/quiz/quiz-search/quiz-search.page';
import { QuizTopPage } from '@/pages/quiz/quiz-top/quiz-top.page';

import { QuizPage } from './quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            component: QuizPage
          },
          {
            path: 'create',
            component: QuizCreateSearchPage,
          },
          {
            path: 'top',
            component: QuizTopPage,
          },
          {
            path: 'search',
            component: QuizSearchPage,
          }
        ],
      }
    ]),
    ComponentsModule,
    QuizCreateSearchPageModule
  ],
  declarations: [QuizPage]
})
export class QuizPageModule {}
