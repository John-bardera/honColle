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

  async setLocalPush() {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Title',
          body: 'Body',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null
        }
      ]
    });
    console.log('scheduled notifications', notifs);
  }

  stopLocalPush() {
    LocalNotifications.getPending().then(res => {
      LocalNotifications.cancel(res);
    }, error => {
      console.log(error);
    });
  }

  async reccomendBook() {
    await this.setLocalPush();
    /*
    if (this.recBook) {
      this.setLocalPush();
    } else {
      this.stopLocalPush();
    }*/
  }
}
