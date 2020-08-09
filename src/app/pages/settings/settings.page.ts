import { Component } from '@angular/core';

import { PushService } from '@/services';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  recBook = false;
  nRead = false;
  start = false;
  constructor(private pushService: PushService) {}

  changedRecBook(ev: any) {
    // this.pushService.recBook = ev.target.value === 'on';
  }
}
