import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '@/components/components.module';

import { QuizSearchPage } from './quiz-search.page';

const routes: Routes = [
  {
    path: '',
    component: QuizSearchPage
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
  declarations: [QuizSearchPage],
  exports: [
    QuizSearchPage
  ]
})
export class QuizSearchPageModule {}
