import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.page.html',
  styleUrls: ['analytics.page.scss'],
})
export class AnalyticsPage {

  selected: boolean;
  selectedtab: string;

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
    this.selectedtab = 'author';
    this.selected = false;
  }

  onSelectTab(tab: string){
    this.selectedtab = tab;
  }

  onSelectList(select: boolean){
    this.selected = select;
  }

}