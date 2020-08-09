import { Component } from '@angular/core';

import { PushService } from '../../push.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  recBook = false;
  nRead = false;
  start = false;
  constructor(private pushService: PushService) {
    //this.pushService.recBook = this.recBook;
  }

  changedRecBook(ev: any){
    this.pushService.recBook = ev.target.value === 'on';
  }
}
