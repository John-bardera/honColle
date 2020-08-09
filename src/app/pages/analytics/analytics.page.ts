import { AfterViewInit, Component, ViewChild } from '@angular/core';

import Chart from 'chart.js';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '@/models';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.page.html',
  styleUrls: ['analytics.page.scss'],
})
export class AnalyticsPage {
  @ViewChild('MyChart', { static: true }) myChart;

  selected: string;

    // グラフの表示サイズ
  view: any[] = [700, 400];

  // 設定
  showLegend = true;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

　// カラーテーマ
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // サンプルデータ
  sampleData = [
    {name: '読書済み', value: '13'},
    {name: '積読', value: '48'},
    {name: '未所持', value: '39'}
  ];

  constructor() {
    this.selected = 'author';
  }

  ionViewDidEnter() {
    const chart = new Chart(this.myChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['赤', '青', '黄', '緑', '紫', '橙'],
        datasets: [{
          label: '得票数',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  segmentChanged(ev: any) {
    console.log(ev);
  }
  onSelectTab(tab: string) {
    this.selected = tab;
  }
}
