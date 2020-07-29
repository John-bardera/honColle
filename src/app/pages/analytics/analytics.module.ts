import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AnalyticsDetailPage } from './analytics-detail/analytics-detail.page';
import { AnalyticsPage } from './analytics.page';

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
            component: AnalyticsPage
          },
          {
            path: ':id',
            loadChildren: () => import('./analytics-detail/analytics-detail.module').then(m => m.AnalyticsDetailPageModule)
          }
        ]
      }
    ])
  ],
  declarations: [AnalyticsPage]
})
export class AnalyticsPageModule {}
