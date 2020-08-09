import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';

import { enableNotice4NoOpenedLongTime, enableNotice4UnreadLongTime } from '@/config';
import { Book } from '@/models';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PushService {
  enableNotice4UnreadLongTime$ = new BehaviorSubject(enableNotice4UnreadLongTime);
  enableNotice4NoOpenedLongTime$ = new BehaviorSubject(enableNotice4NoOpenedLongTime);

  constructor(
    private store: Store<AppState>,
  ) { }

  requestPermission() {
    LocalNotifications.requestPermission().then(
      _ => {
        this.setNotification4UnreadLongTime();
      }
    );
  }

  areEnabled() {
    LocalNotifications.areEnabled();
  }

  setNotification4UnreadLongTime() {
    this.store.pipe(select(selectBooks)).subscribe(async books => {
      if (books.length && this.enableNotice4UnreadLongTime$.value) {
        const book = books[0];
        const notifs = await LocalNotifications.schedule({
          notifications: [
            {
              title: '良いところで読むのをやめてませんか？',
              body: `${book.title}`,
              id: 1,
              schedule: { at: new Date(Date.now() + 1000 * 5) },
              sound: null,
              attachments: null,
              actionTypeId: '',
              smallIcon: `${book.smallImageUrl}`,
              extra: null
            }
          ]
        });
        console.log('scheduled notifications', notifs);
      }
    });
  }

  stopLocalPush() {
    LocalNotifications.getPending().then(res => {
      LocalNotifications.cancel(res);
    }, error => {
      console.log(error);
    });
  }
}
