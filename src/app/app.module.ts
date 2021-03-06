import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { QuizChallengeComponent } from '@/components/quiz-challenge/quiz-challenge.component';
import { QuizCreateComponent } from '@/components/quiz-create/quiz-create.component';

import { httpInterceptorProviders } from '../http-interceptors';
import { ApisModule } from './apis/apis.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { reducers } from './store';

@NgModule({
  declarations: [AppComponent],
  // Modalとかはここに追加しないといけない
  entryComponents: [
    QuizChallengeComponent,
    QuizCreateComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ApisModule,
    StoreModule.forRoot(reducers),
    ServicesModule,
    ComponentsModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
