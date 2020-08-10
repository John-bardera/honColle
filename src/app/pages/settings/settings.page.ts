import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService, PushService } from '@/services';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  recBook$: Observable<boolean>;
  nRead$: Observable<boolean>;
  start$: Observable<boolean>;
  constructor(
    private pushService: PushService,
    private bookService: BookService,
  ) {
    this.recBook$ = this.bookService.enableRecommendBooks$;
    this.nRead$ = this.pushService.enableNotice4UnreadLongTime$;
    this.start$ = this.pushService.enableNotice4NoOpenedLongTime$;
  }

  changedRecBook(ev: any) {
    this.bookService.enableRecommendBooks$.next(ev.detail.checked);
  }
  changedNRead(ev: any) {
    this.pushService.enableNotice4UnreadLongTime$.next(ev.detail.checked);
  }
  changedStart(ev: any) {
    this.pushService.enableNotice4NoOpenedLongTime$.next(ev.detail.checked);
  }
}
