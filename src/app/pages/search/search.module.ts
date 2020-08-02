import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';

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
            component: SearchPage
          },
          {
            path: 'result',
            loadChildren: () => import('./search-result/search-result.module').then(m => m.SearchResultPageModule)
          }
        ]
      }
    ])
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
