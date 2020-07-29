import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@/store';

@Component({
  selector: 'app-analytics-detail',
  templateUrl: './analytics-detail.page.html',
  styleUrls: ['./analytics-detail.page.scss'],
})
export class AnalyticsDetailPage implements OnInit {
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
