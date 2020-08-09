import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BookService, PushService, QuizService } from '@/services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private bookService: BookService,
    private quizService: QuizService,
    private pushService: PushService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.bookService.initBooks();
      this.quizService.initQuizzes();
      this.pushService.requestPermission();
    });
  }
}
