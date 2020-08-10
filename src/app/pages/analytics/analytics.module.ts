import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


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
            path: 'graph',
            loadChildren: () => import('./analytics-graph/analytics-graph.module').then(m => m.AnalyticsGraphPageModule)
          }
        ]
      }
    ])
  ],
  declarations: [AnalyticsPage]
})
export class AnalyticsPageModule {}
