import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EmptyStateComponent } from './empty-state/empty-state.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    ListItemComponent,
    EmptyStateComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    ListItemComponent,
    EmptyStateComponent,
  ],
})

export class ComponentsModule {}
