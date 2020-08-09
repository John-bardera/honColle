import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PushService {

  // 各種設定
  recBook: boolean;

  constructor() { }

  requestPermission() {
    LocalNotifications.requestPermission();
  }

  areEnabled() {
    LocalNotifications.areEnabled();
  }

  setLocalPush() {
    // 5秒後に通知が来る
     const date = new Date(Date.now() + 1000 * 5);
     LocalNotifications.schedule({
        notifications: [
          {
            title: 'Title',
            body: 'Body',
            id: 1,
            schedule: { at: date },
            sound: null,
          }
        ]
    });
  }

  stopLocalPush() {
    LocalNotifications.getPending().then(res => {
      LocalNotifications.cancel(res);
    }, error => {
      console.log(error);
    });
  }

  reccomendBook() {
    if (this.recBook) {
      this.setLocalPush();
    } else {
      this.stopLocalPush();
    }
  }
}
