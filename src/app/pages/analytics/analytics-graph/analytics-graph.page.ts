import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import Chart from 'chart.js';

import { Book } from '@/models';
import { BookService } from '@/services';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-analytics-graph',
  templateUrl: './analytics-graph.page.html',
  styleUrls: ['./analytics-graph.page.scss'],
})
export class AnalyticsGraphPage implements OnInit {
  @ViewChild('MyChart', { static: true }) myChart;

  author: string;
  isLoading = true;

  // グラフの表示サイズ
  view: any[] = [700, 400];

  // 設定
  showLegend = true;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

　// カラーテーマ
  backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)'
  ];
  borderColor = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)'
  ];

  // サンプルデータ
  dataSolver = [
    { name: '読書済み', value: 0 },
    { name: '積読', value: 0 },
    { name: '未所持', value: 0 }
  ];

  constructor(
    private loadingCtrl: LoadingController,
    private store: Store<AppState>,
    private bookService: BookService,
  ) {
    this.author = this.bookService.selectedAuthor$.value;
  }
  async ngOnInit() {
    if (this.author) {
      const loading = await this.loadingCtrl.create();
      await loading.present();
      this.isLoading = true;

      let hadBooksCount = 0;
      let hadUnreadBooksCount = 0;
      let notHadBooksCount = 0;
      this.bookService.parseQueryOfSearchFromGlobalAndSearch(this.author, false, true)
        .subscribe(async (searchedBooks: Array<Book>) => {
          console.log(searchedBooks);
          const books = await this.store.pipe(select(selectBooks), take(1)).toPromise();
          const booksByIsbns: { [key: string]: Book } = {};
          books.map(b => booksByIsbns[b.isbn] = b);
          searchedBooks.map(sbook => {
            if (Object.keys(booksByIsbns).includes(sbook.isbn)) {
              if (booksByIsbns[sbook.isbn].isRead) {
                hadBooksCount++;
              } else {
                hadUnreadBooksCount++;
              }
            } else {
              notHadBooksCount++;
            }
          });
          loading.dismiss();
          this.dataSolver[0].value = hadBooksCount;
          this.dataSolver[1].value = hadUnreadBooksCount;
          this.dataSolver[2].value = notHadBooksCount;
          const chart = new Chart(this.myChart.nativeElement, {
            type: 'pie',
            data: {
              labels: this.dataSolver.map(d => d.name),
              datasets: [{
                label: '',
                data: this.dataSolver.map(d => d.value),
                backgroundColor: this.backgroundColor,
                borderColor: this.borderColor,
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
          this.isLoading = false;
        });
    }
  }

  ionViewDidEnter() {}

}
