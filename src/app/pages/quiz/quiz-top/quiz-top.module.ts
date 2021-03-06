import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '@/components/components.module';

import { QuizTopPage } from './quiz-top.page';

const routes: Routes = [
  {
    path: '',
    component: QuizTopPage
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
    QuizTopPage
  ],
  declarations: [QuizTopPage]
})
export class QuizTopPageModule {}
