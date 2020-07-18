import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    ListItemComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    ListItemComponent
  ],
})

export class ComponentsModule {}
