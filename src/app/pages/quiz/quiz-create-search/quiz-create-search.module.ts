import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '@/components/components.module';

import { QuizCreateSearchPage } from './quiz-create-search.page';

const routes: Routes = [
  {
    path: '',
    component: QuizCreateSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [
    QuizCreateSearchPage
  ],
  declarations: [QuizCreateSearchPage]
})
export class QuizCreateSearchPageModule {}
