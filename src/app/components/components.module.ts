import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { QuizCreateComponent } from '@/components/quiz-create/quiz-create.component';

import { EmptyStateComponent } from './empty-state/empty-state.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    ListItemComponent,
    EmptyStateComponent,
    QuizCreateComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ListItemComponent,
    EmptyStateComponent,
    QuizCreateComponent,
  ],
})

export class ComponentsModule {}
